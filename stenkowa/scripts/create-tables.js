const { db } = require('@vercel/postgres');
const users = [
	{
		id: '0',
		user_name: 'Marcin',
		email: 'marcinstenka01@gmail.com',
		password: '123456',
		primary_color: 'red',
		secondary_color: 'blue',
	},
];
const bcrypt = require('bcrypt');

async function seedUsers(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
		// Create the "users" table if it doesn't exist
		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        primary_color TEXT NOT NULL,
        secondary_color TEXT NOT NULL
      );
    `;
		console.log(`Created "users" table`);
		const insertedUsers = await Promise.all(
			users.map(async (user) => {
				const hashedPassword = await bcrypt.hash(user.password, 10);
				return client.sql`
        INSERT INTO users (user_name, email, password, primary_color, secondary_color)
        VALUES (${user.user_name}, ${user.email}, ${hashedPassword}, ${user.primary_color},${user.secondary_color});
      `;
			})
		);

		console.log(`Seeded ${insertedUsers.length} users`);

		return {
			createTable,
			users: insertedUsers,
		};
	} catch (error) {
		console.error('Error seeding users:', error);
		throw error;
	}
}

async function main() {
	const client = await db.connect();

	await seedUsers(client);

	await client.end();
}

main().catch((err) => {
	console.error(
		'An error occurred while attempting to seed the database:',
		err
	);
});
