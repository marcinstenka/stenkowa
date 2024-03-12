const { db } = require('@vercel/postgres');
const users = [
	{
		id: '0',
		name: 'Marcin',
		email: 'marcinstenka01@gmail.com',
		password: '123456',
	},
];
const bcrypt = require('bcrypt');

async function seedUsers(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
		// Create the "users" table if it doesn't exist
		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        primary_color TEXT NOT NULL,
        secondary_color TEXT NOT NULL,
      );
    `;
	} catch (error) {
		console.error('Error seeding users:', error);
		throw error;
	}
}
