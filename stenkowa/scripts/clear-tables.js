const { db } = require('@vercel/postgres');

async function clearTables(client) {
	try {
		await Promise.all([
			// client.sql`DROP TABLE IF EXISTS bookmarks;`,
			// client.sql`DROP TABLE IF EXISTS users;`,
			// client.sql`DROP TABLE IF EXISTS storage_items;`,
			// client.sql`DROP TABLE IF EXISTS storages;`,
			client.sql`DROP TABLE IF EXISTS todos;`,
			// client.sql`DROP TABLE IF EXISTS todos_containers;`,
		]);
		console.log(`Cleared tables`);
	} catch (error) {
		throw error;
	}
}

async function main() {
	const client = await db.connect();
	await clearTables(client);
	await client.end();
}

main().catch((err) => {
	console.error(
		'An error occurred while attempting to clear the database:',
		err
	);
});
