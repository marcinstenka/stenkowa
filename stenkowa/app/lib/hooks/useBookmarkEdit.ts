import { ChangeEvent, useState } from 'react';
import { BookmarkType } from '../types/types';

export default function useBookmarkEdit(bookmark: BookmarkType) {
	const [details_header, setDetails_header] = useState<string>(bookmark.name);
	const [link, setLink] = useState<string>(bookmark.link);
	const [icon, setIcon] = useState<string>(bookmark.icon);

	const handleHeaderChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDetails_header(e.target.value);
	};
	const handleLinkChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setLink(e.target.value);
	};
	const handleIconChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIcon(e.target.value);
	};

	return {
		handleHeaderChange,
		handleLinkChange,
		handleIconChange,
		details_header,
		link,
		icon,
	};
}
