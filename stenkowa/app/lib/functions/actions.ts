'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

export type State = {
	message?: string | null;
};

const USER_ID = 1; //for testing
const TODOS_CONTAINER_ID = 1; // for testing

export async function registerUser(prevState: State, formData: FormData) {
	const validatedFields = {
		userName: formData.get('userName')?.toString(),
		email: formData.get('email')?.toString(),
		password: formData.get('password')?.toString(),
	};

	const { userName, email, password } = validatedFields;
	let hashedPassword = '';
	if (password) {
		await bcrypt.hash(password, 10).then((hash) => {
			hashedPassword = hash;
		});
	}

	try {
		const emails = await sql`
			 SELECT email FROM users WHERE email = ${email};
		`;
		if (emails.rows.length) {
			return {
				message: 'Ten email jest już zajęty. Użyj innego.',
			};
		} else {
			//creating new storage and todos_container for user
			//then creating new user with ids from storage and todos_container
			await sql`
			WITH new_storage AS (
				INSERT INTO storages DEFAULT VALUES RETURNING id AS storage_id
			), new_todos_container AS (
				INSERT INTO todos_containers DEFAULT VALUES RETURNING id AS todos_container_id
			)
			INSERT INTO users (todos_container_id, storage_id, user_name, email, password, primary_color, secondary_color)
			SELECT todos_container_id, storage_id, ${userName}, ${email}, ${hashedPassword}, '#0050b8', '#ffffff'
			FROM new_storage, new_todos_container;`;
		}
	} catch (error) {
		return {
			message: 'Coś poszło nie tak. Spróbuj ponownie później.',
		};
	}
	revalidatePath('/login');
	redirect('/login');
}

export async function createBookmark(prevState: State, formData: FormData) {
	const validatedFields = {
		name: formData.get('new_bookmark_name')?.toString(),
		link: formData.get('new_bookmark_link')?.toString(),
		icon: formData.get('new_bookmark_icon')?.toString(),
		color: formData.get('new_bookmark_color')?.toString(),
	};
	const { name, link, icon, color } = validatedFields;

	try {
		await sql`
		INSERT INTO bookmarks (user_id, name, link, color, icon)
        VALUES (${USER_ID}, ${name}, ${link}, ${color},${icon});
		`;
	} catch (error) {
		return {
			message: 'Coś poszło nie tak. Spróbuj ponownie później.',
		};
	}

	revalidatePath('/bookmarks');
	redirect('/bookmarks');
}

export async function updateBookmark(bookmarkId: number, formData: FormData) {
	const validatedFields = {
		name: formData.get('details_header')?.toString(),
		link: formData.get('details_text')?.toString(),
		icon: formData.get('new_bookmark_icon')?.toString(),
		color: formData.get('details_color')?.toString(),
	};
	const { name, link, icon, color } = validatedFields;

	try {
		await sql`
		UPDATE bookmarks SET name = ${name}, link = ${link}, color = ${color}, icon = ${icon} WHERE id = ${bookmarkId}`;
	} catch (error) {
		console.log(error);
	}

	revalidatePath('/bookmarks');
	redirect('/bookmarks');
}
export async function deleteBookmark(id: number) {
	try {
		await sql`
       	 DELETE FROM bookmarks where id = ${id}`;
		revalidatePath('/bookmarks');
		redirect('/bookmarks');
	} catch (error) {
		console.log(error);
	}
}

export async function createTodo(prevState: State, formData: FormData) {
	const validatedFields = {
		name: formData.get('new_todo_name')?.toString(),
		description: formData.get('new_todo_description')?.toString(),
		date_deadline_string: formData.get('new_todo_deadline')?.toString(),
		date_added_string: formData.get('new_todo_added')?.toString(),
		color: formData.get('new_todo_color')?.toString(),
	};
	const { name, description, date_deadline_string, date_added_string, color } =
		validatedFields;

	let date_deadline: string = '';
	let date_added: string = '';
	if (date_deadline_string && date_added_string) {
		date_deadline = new Date(date_deadline_string).toISOString();
		date_added = new Date(date_added_string).toISOString();
		try {
			await sql`
            INSERT INTO todos (todos_container_id, name, description, color, date_deadline, date_added)
            VALUES (${TODOS_CONTAINER_ID}, ${name}, ${description}, ${color}, ${date_deadline}, ${date_added});
        `;
		} catch (error) {
			console.log(error);
			return {
				message: 'Coś poszło nie tak. Spróbuj ponownie później.',
			};
		}

		revalidatePath('/todo');
		redirect('/todo');
	} else {
		return {
			message: 'Brak danych dotyczących daty.',
		};
	}
}
export async function updateTodo(todoId: number, formData: FormData) {
	const validatedFields = {
		name: formData.get('details_header')?.toString(),
		description: formData.get('details_text')?.toString(),
		color: formData.get('details_color')?.toString(),
		date_deadline_string: formData.get('date_deadline')?.toString(),
	};
	const { name, description, color, date_deadline_string } = validatedFields;
	let deadline: Date;
	let uniq_deadline: string = '';
	if (date_deadline_string) {
		deadline = new Date(date_deadline_string);
		deadline.setMilliseconds(deadline.getMilliseconds() + 1);
		uniq_deadline = deadline.toISOString();
	}

	try {
		await sql`
		UPDATE todos SET name = ${name}, description = ${description}, color = ${color}, date_deadline = ${uniq_deadline} WHERE id = ${todoId}`;
	} catch (error) {
		console.log(error);
	}

	revalidatePath('/todo');
	redirect('/todo');
}

export async function deleteTodo(id: number) {
	try {
		await sql`
       	 DELETE FROM todos where id = ${id}`;
	} catch (error) {
		console.log(error);
	}
	revalidatePath('/todo');
	redirect('/todo');
}
