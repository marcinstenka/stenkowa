import styles from './bookmarks.module.scss';
import { BookmarkType } from '../../types/types';
import { SiNetflix } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';

type IconMap = {
	[key: string]: React.ElementType;
};

const iconMap: IconMap = {
	SiNetflix: SiNetflix,
	FaFacebookF: FaFacebookF,
};

export default function Bookmark({ bookmark }: { bookmark: BookmarkType }) {
	const IconComponent = iconMap[bookmark.icon];

	return (
		<a href={bookmark.link} className={styles.bookmark}>
			<div
				style={{ background: `${bookmark.color}` }}
				className={styles.bookmark_color}
			></div>
			{IconComponent && <IconComponent />}

			<p className={styles.bookmark_text}>{bookmark.text}</p>
		</a>
	);
}
