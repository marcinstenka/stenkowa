import { fetchBookmarks } from '../../functions/data';
import { BookmarkType } from '../../types/types';
import Bookmark from './Bookmark';
import styles from './bookmarks.module.scss';

export default async function BookmarksContainer() {
	const bookmarks: BookmarkType[] | undefined = await fetchBookmarks();
	return (
		<div className={styles.container}>
			{bookmarks &&
				bookmarks.map((bookmark, index) => {
					return <Bookmark bookmark={bookmark} enableEdit={true} key={index} />;
				})}
		</div>
	);
}
