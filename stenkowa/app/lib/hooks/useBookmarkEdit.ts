import { ChangeEvent, useState } from 'react';
import { BookmarkType } from '../types/types';

type UseBookmarkEditProps = BookmarkType;

type UseBookmarkEditReturn = {
	handleHeaderChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleLinkChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	handleIconChange: (e: ChangeEvent<HTMLInputElement>) => void;
	bookmarkName: string;
	bookmarkLink: string;
	bookmarkIcon: string;
};

export default function useBookmarkEdit(
	bookmark: UseBookmarkEditProps
): UseBookmarkEditReturn {
	const [bookmarkName, setBookmarkName] = useState<string>(bookmark.name);
	const [bookmarkLink, setBookmarkLink] = useState<string>(bookmark.link);
	const [bookmarkIcon, setBookmarkIcon] = useState<string>(bookmark.icon);

	const handleHeaderChange = (e: ChangeEvent<HTMLInputElement>) => {
		setBookmarkName(e.target.value);
	};
	const handleLinkChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setBookmarkLink(e.target.value);
	};
	const handleIconChange = (e: ChangeEvent<HTMLInputElement>) => {
		setBookmarkIcon(e.target.value);
	};

	return {
		handleHeaderChange,
		handleLinkChange,
		handleIconChange,
		bookmarkName,
		bookmarkLink,
		bookmarkIcon,
	};
}
