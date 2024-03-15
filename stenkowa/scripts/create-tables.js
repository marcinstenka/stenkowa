const { db } = require('@vercel/postgres');
const users = [
	{
		user_name: 'Marcin',
		email: 'marcinstenka01@gmail.com',
		password: '123456',
		primary_color: 'red',
		secondary_color: 'blue',
	},
];
const todos = [
	{
		todos_container_id: 1,
		name: '123456',
		details: 'red',
		color: 'blue',
		date_deadline: new Date(),
	},
];
const todosContainers = [
	{
		user_id: '1',
	},
];
const bookmarks = [
	{
		name: 'Facebook',
		user_id: 1,
		link: 'https://facebook.com/',
		color: 'blue',
		icon: 'FaFacebook',
	},
];
const StoragesContainers = [
	{
		user_id: 1,
	},
];
const StoragesItems = [
	{
		storage_id: 1,
		name: 'Torby prezentowe',
		description: 'Kilka toreb prezentowych, w tym świąteczne',
		color: 'blue',
		insert_date: new Date(),
	},
];
const bcrypt = require('bcrypt');

async function createUsers(client) {
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
async function createTodosContainers(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS todosContainers (
        id SERIAL PRIMARY KEY,
		user_id INT,
		FOREIGN KEY (user_id) REFERENCES users(id),
      );
    `;
		console.log(`Created "todosContainers" table`);
		const insertedTodosContainers = await Promise.all(
			todosContainers.map(async (todosContainer) => {
				return client.sql`
        INSERT INTO todosContainers (user_id)
        VALUES (${todosContainer.user_id});
      `;
			})
		);

		console.log(`Seeded ${insertedTodosContainers.length} todos`);

		return {
			createTable,
			todosContainers: insertedTodosContainers,
		};
	} catch (error) {
		console.error('Error seeding todosContainers:', error);
		throw error;
	}
}
async function createTodos(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
		todos_container_id INT,
		FOREIGN KEY (todos_container_id) REFERENCES todosContainers(id),
        name TEXT NOT NULL,
        details TEXT NOT NULL,
        color TEXT NOT NULL,
        date_deadline DATE NOT NULL
      );
    `;
		console.log(`Created "todos" table`);
		const insertedTodos = await Promise.all(
			todos.map(async (todo) => {
				return client.sql`
        INSERT INTO todos (user_id, name, details, color, date_deadline)
        VALUES (${todo.user_id}, ${todo.name}, ${todo.details}, ${todo.color},${todo.date_deadline});
      `;
			})
		);

		console.log(`Seeded ${insertedTodos.length} todos`);

		return {
			createTable,
			todos: insertedTodos,
		};
	} catch (error) {
		console.error('Error seeding todos:', error);
		throw error;
	}
}
async function createStoragesContainers(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS storagesContainers (
        id SERIAL PRIMARY KEY,
		user_id INT,
		FOREIGN KEY (user_id) REFERENCES users(id),
      );
    `;
		console.log(`Created "storagesContainers" table`);
		const insertedStoragesContainers = await Promise.all(
			storagesContainers.map(async (storagesContainer) => {
				return client.sql`
        INSERT INTO storagesContainers (user_id)
        VALUES (${storagesContainer.user_id});
      `;
			})
		);

		console.log(
			`Seeded ${insertedStoragesContainers.length} Storages Containers`
		);

		return {
			createTable,
			storagesContainers: insertedStoragesContainers,
		};
	} catch (error) {
		console.error('Error seeding storagesContainers:', error);
		throw error;
	}
}

async function createBookmarks(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS bookmarks (
        id SERIAL PRIMARY KEY,
		user_id INT,
		FOREIGN KEY (user_id) REFERENCES users(id),
        name TEXT NOT NULL,
        link TEXT NOT NULL,
        color TEXT NOT NULL,
        icon TEXT NOT NULL
      );
    `;
		console.log(`Created "bookmarks" table`);
		const insertedBookmarks = await Promise.all(
			bookmarks.map(async (bookmark) => {
				return client.sql`
        INSERT INTO bookmarks (user_id, name, link, color, icon)
        VALUES (${bookmark.user_id}, ${bookmark.name}, ${bookmark.link}, ${bookmark.color},${bookmark.icon});
      `;
			})
		);

		console.log(`Seeded ${insertedBookmarks.length} todos`);

		return {
			createTable,
			bookmarks: insertedBookmarks,
		};
	} catch (error) {
		console.error('Error seeding bookmarks:', error);
		throw error;
	}
}

async function main() {
	const client = await db.connect();

	await createUsers(client);
	await createTodosContainers(client);
	await createTodos(client);
	await createBookmarks(client);

	await client.end();
}

main().catch((err) => {
	console.error(
		'An error occurred while attempting to seed the database:',
		err
	);
});
