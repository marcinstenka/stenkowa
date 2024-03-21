import { fetchBookmarks } from '../../functions/data';
import { BookmarkType } from '../../types/types';
import Bookmark from './Bookmark';
import styles from './bookmarks.module.scss';

export default async function BookmarksContainer() {
	const bookmarks: BookmarkType[] | undefined = await fetchBookmarks();
	if (!bookmarks) return;
	return (
		<div className={styles.container}>
			{bookmarks.length > 0 ? (
				bookmarks.map((bookmark, index) => {
					return <Bookmark bookmark={bookmark} enableEdit={true} key={index} />;
				})
			) : (
				<h2 className='no_results'>Brak zakładek!</h2>
			)}
		</div>
	);
}
