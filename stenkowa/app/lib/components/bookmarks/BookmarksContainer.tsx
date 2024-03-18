import { fetchBookmarks } from '../../functions/data';
import { BookmarkType } from '../../types/types';
import Bookmark from './Bookmark';
import styles from './bookmarks.module.scss';

export default async function BookmarksContainer() {
	const bookmarks: BookmarkType[] = [
		{
			id: 1,
			link: 'https://www.netflix.com/browse',
			icon: 'SiNetflix',
			name: 'Netflix',
			color: '#E50914',
		},
		{
			id: 2,
			link: 'https://mail.google.com/mail/u/0/',
			icon: 'SiGmail',
			name: 'Gmail',
			color: '#f2a60c',
		},
		{
			id: 3,
			link: 'https://www.facebook.com',
			icon: 'FaFacebookF',
			name: 'Facebook',
			color: '#4267B2',
		},
		{
			id: 4,
			link: 'https://www.youtube.com/',
			icon: 'FaYoutube',
			name: 'Youtube',
			color: '#FF0000',
		},
		{
			id: 4,
			link: 'https://www.youtube.com/',
			icon: 'FaYoutube',
			name: 'Youtube',
			color: '#FF0000',
		},
		{
			id: 4,
			link: 'https://www.youtube.com/',
			icon: 'FaYoutube',
			name: 'Youtube',
			color: '#FF0000',
		},
		{
			id: 4,
			link: 'https://www.youtube.com/',
			icon: 'FaYoutube',
			name: 'Youtube',
			color: '#FF0000',
		},
		{
			id: 4,
			link: 'https://www.youtube.com/',
			icon: 'FaYoutube',
			name: 'Youtube',
			color: '#FF0000',
		},
		{
			id: 4,
			link: 'https://www.youtube.com/',
			icon: 'FaYoutube',
			name: 'Youtube',
			color: '#FF0000',
		},
		{
			id: 4,
			link: 'https://www.youtube.com/',
			icon: 'FaYoutube',
			name: 'Youtube',
			color: '#FF0000',
		},
		{
			id: 4,
			link: 'https://www.youtube.com/',
			icon: 'FaYoutube',
			name: 'Youtube',
			color: '#FF0000',
		},
		{
			id: 4,
			link: 'https://www.youtube.com/',
			icon: 'FaYoutube',
			name: 'Youtube',
			color: '#FF0000',
		},
		{
			id: 4,
			link: 'https://www.youtube.com/',
			icon: 'FaYoutube',
			name: 'Youtube',
			color: '#FF0000',
		},
	];
	const a = await fetchBookmarks();
	return (
		<div className={styles.container}>
			{}
			{a &&
				a.map((bookmark, index) => {
					return <Bookmark bookmark={bookmark} enableEdit={true} key={index} />;
				})}
		</div>
	);
}
