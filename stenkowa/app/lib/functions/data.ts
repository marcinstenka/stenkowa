import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { BookmarkType } from '../types/types';

const USER_ID = 1; // for testing

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
