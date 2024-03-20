import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { BookmarkType, TodoType } from '../types/types';

const USER_ID = 1; // for testing
const TODOS_CONTAINER_ID = 1; // for testing

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
