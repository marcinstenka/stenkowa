'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

export type State = {
	message?: string | null;
};

const USER_ID = 1; //for testing

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
