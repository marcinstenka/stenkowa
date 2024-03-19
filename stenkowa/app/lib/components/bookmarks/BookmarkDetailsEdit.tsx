import { fetchBookmark } from '../../functions/data';
import { BookmarkType } from '../../types/types';
import BookmarkEditForm from './BookmarkEditForm';

type BookmarkDetailsEditProps = { id: number };

export default async function BookmarkDetailsEdit({
	id,
}: BookmarkDetailsEditProps) {
	const bookmark: BookmarkType | undefined = await fetchBookmark(id);
	if (bookmark) {
		return <BookmarkEditForm {...bookmark} />;
	}
}
