const { db } = require('@vercel/postgres');
const users = [
	{
		user_name: 'Marcin',
		todos_container_id: 1,
		storage_id: 1,
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
const todosContainers = [{}];
const bookmarks = [
	{
		name: 'Facebook',
		user_id: 1,
		link: 'https://facebook.com/',
		color: 'blue',
		icon: 'FaFacebook',
	},
];
const storages = [{}];
const storagesItems = [
	{
		storage_id: 1,
		name: 'Torby prezentowe',
		description: 'Kilka toreb prezentowych, w tym świąteczne',
		color: 'blue',
		insert_date: new Date(),
	},
];
const bcrypt = require('bcrypt');
async function createTodosContainers(client) {
	try {
		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS todos_containers (
        id SERIAL PRIMARY KEY
      );
    `;
		console.log(`Created "todos_containers" table`);
		const insertedTodosContainers = await client.sql`
            INSERT INTO todos_containers DEFAULT VALUES RETURNING *;
        `;

		console.log(`Seeded todos_containers`);

		return {
			createTable,
			todosContainers: insertedTodosContainers,
		};
	} catch (error) {
		console.error('Error seeding todos_containers:', error);
		throw error;
	}
}
async function createStorages(client) {
	try {
		const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS storages (
                id SERIAL PRIMARY KEY
            );
        `;
		console.log(`Created "storages" table`);
		const insertedStorages = await client.sql`
            INSERT INTO storages DEFAULT VALUES RETURNING *;
        `;

		console.log(`Seeded storages`);

		return {
			createTable,
			storages: insertedStorages,
		};
	} catch (error) {
		console.error('Error seeding storages:', error);
		throw error;
	}
}
async function createUsers(client) {
	try {
		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
		todos_container_id INT,
		FOREIGN KEY (todos_container_id) REFERENCES todos_containers(id),
		storage_id INT,
		FOREIGN KEY (storage_id) REFERENCES storages(id),
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
        INSERT INTO users (todos_container_id, storage_id,user_name, email, password, primary_color, secondary_color)
        VALUES (${user.todos_container_id}, ${user.storage_id}, ${user.user_name}, ${user.email}, ${hashedPassword}, ${user.primary_color},${user.secondary_color});
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
async function createTodos(client) {
	try {
		const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS todos (
                id SERIAL PRIMARY KEY,
                todos_container_id INT,
                FOREIGN KEY (todos_container_id) REFERENCES todos_containers(id),
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
                    INSERT INTO todos (todos_container_id, name, details, color, date_deadline)
                    VALUES (${todo.todos_container_id}, ${todo.name}, ${todo.details}, ${todo.color}, ${todo.date_deadline});
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
async function createStoragesItems(client) {
	try {
		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS storages_items(
        id SERIAL PRIMARY KEY,
		storage_id INT,
		FOREIGN KEY (storage_id) REFERENCES storages(id),
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        color TEXT NOT NULL,
        insert_date DATE NOT NULL
      );
    `;
		console.log(`Created "storages_items" table`);
		const insertedStorageItems = await Promise.all(
			storagesItems.map(async (item) => {
				return client.sql`
        INSERT INTO storages_items (storage_id, name, description, color, insert_date)
        VALUES (${item.storage_id}, ${item.name}, ${item.description}, ${item.color},${item.insert_date});
      `;
			})
		);

		console.log(`Seeded ${insertedStorageItems.length} storage items`);

		return {
			createTable,
			storagesItems: insertedStorageItems,
		};
	} catch (error) {
		console.error('Error seeding storage items:', error);
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

	await createTodosContainers(client);
	await createStorages(client);
	await createTodos(client);
	await createUsers(client);
	await createStoragesItems(client);
	await createBookmarks(client);

	await client.end();
}

main().catch((err) => {
	console.error(
		'An error occurred while attempting to seed the database:',
		err
	);
});
