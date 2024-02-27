import { BookmarkType } from '../../types/types';
import BookmarkEditForm from './BookmarkEditForm';

export default function BookmarkDetailsEdit() {
	const tempBookmark: BookmarkType = {
		id: 1,
		link: 'https://www.netflix.com/browse',
		icon: 'SiNetflix',
		text: 'Netflix',
		color: '#E50914',
	};

	return <BookmarkEditForm {...tempBookmark} />;
}
