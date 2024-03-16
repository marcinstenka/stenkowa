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
		bcrypt.hash(password, 10).then((hash) => {
			hashedPassword = hash;
		});
	}
	try {
		const result = await sql`
        SELECT * from users where email = ${email}
    `;
		if (result.rows.length > 0) {
			return {
				message: 'Ten email jest już używany.',
			};
		} else {
			console.log('Działa');
			try {
				await sql`
              INSERT INTO users (todos_container_id, storage_id, user_name, email, password, primary_color, secondary_color)
            VALUES (1, 1, ${userName}, ${email}, ${hashedPassword}, 'blue', 'white');
             `;
			} catch (error) {
				console.log('nie działa', error);
			}
		}
	} catch (error) {
		return {
			message: 'Database Error.',
		};
	}
}
