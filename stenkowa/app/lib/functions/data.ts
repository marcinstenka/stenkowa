import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
	BookmarkType,
	StorageItemType,
	TodoType,
	UserType,
} from '../types/types';

const USER_ID = 1; // for testing
const TODOS_CONTAINER_ID = 1; // for testing
const STORAGE_ID = 1; // for testing

export async function fetchBookmarks() {
	noStore();
	try {
		const data = await sql<BookmarkType>`
        select * FROM bookmarks where user_id = ${USER_ID}
        `;
		return data.rows;
	} catch (error) {
		console.log(error);
	}
}
export async function fetchBookmark(id: number) {
	noStore();
	try {
		const data = await sql<BookmarkType>`
        select * FROM bookmarks where user_id = ${USER_ID} and id = ${id}
        `;
		return data.rows[0];
	} catch (error) {
		console.log(error);
	}
}

export async function fetchTodos() {
	noStore();
	try {
		const data = await sql<TodoType>`
        select * FROM todos where todos_container_id = ${TODOS_CONTAINER_ID}`;
		return data.rows;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchTodo(id: number) {
	noStore();
	try {
		const data = await sql<TodoType>`
        select * FROM todos where todos_container_id = ${TODOS_CONTAINER_ID} and id = ${id}
        `;
		return data.rows[0];
	} catch (error) {
		console.log(error);
	}
}

export async function fetchStorageItems() {
	noStore();
	try {
		const data = await sql<StorageItemType>`
        select * FROM storage_items where storage_id = ${STORAGE_ID}
        `;
		return data.rows;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchStorageItem(id: number) {
	noStore();
	try {
		const data = await sql<StorageItemType>`
        select * FROM storage_items where storage_id = ${STORAGE_ID} and id = ${id}
        `;
		return data.rows[0];
	} catch (error) {
		console.log(error);
	}
}
export async function fetchUserNameWithStorageId(storage_id: number) {
	noStore();
	try {
		const data = await sql<UserType>`
        select * FROM users, storages where users.storage_id = storages.id and users.storage_id = ${storage_id}
        `;
		return data.rows[0];
	} catch (error) {
		console.log(error);
	}
}

export async function fetchUser(id: number) {
	noStore();
	try {
		const data = await sql<UserType>`
        select * FROM users WHERE id = ${USER_ID}
        `;
		return data.rows[0];
	} catch (error) {
		console.log(error);
	}
}
