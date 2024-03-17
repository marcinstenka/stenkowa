'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

export type State = {
	message?: string | null;
};
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
		const result = await sql`
        SELECT email from users where email = ${email}`;
		if (result.rows.length > 0) {
			return {
				message: 'Ten email jest już zajęty. Użyj innego.',
			};
		} else {
			try {
				const storageResult =
					await sql`INSERT INTO todos_containers DEFAULT VALUES RETURNING id`;
				const storage_id = storageResult.rows[0].id;
				const todosContainerResult =
					await sql`INSERT INTO todos_containers DEFAULT VALUES RETURNING id`;
				const todos_container_id = todosContainerResult.rows[0].id;
				await sql`
					INSERT INTO users (todos_container_id, storage_id, user_name, email, password, primary_color, secondary_color)
					VALUES (${storage_id}, ${todos_container_id}, ${userName}, ${email}, ${hashedPassword}, '#0050b8', '#ffffff');`;
			} catch (error) {
				console.log(error);
				return {
					message: 'Coś poszło nie tak. Spróbuj ponownie później.',
				};
			}
		}
	} catch (error) {
		return {
			message: 'Coś poszło nie tak. Spróbuj ponownie później.',
		};
	}
	revalidatePath('/login');
	redirect('/login');
}
