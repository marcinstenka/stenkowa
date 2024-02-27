import styles from './bookmarks.module.scss';
import Link from 'next/link';

import { BookmarkType } from '../../types/types';
import { SiNetflix } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BiSolidEdit } from 'react-icons/bi';

type IconMap = {
	[key: string]: React.ElementType;
};

const iconMap: IconMap = {
	SiNetflix: SiNetflix,
	FaFacebookF: FaFacebookF,
	FaYoutube: FaYoutube,
	SiGmail: SiGmail,
};

type BookmarkProps = { bookmark: BookmarkType };
export default function Bookmark({ bookmark }: BookmarkProps) {
	const IconComponent = iconMap[bookmark.icon];

	return (
		<a href={bookmark.link} className={styles.bookmark}>
			<div
				style={{ background: `${bookmark.color}` }}
				className={styles.bookmark_color}
			></div>
			{IconComponent && (
				<IconComponent style={{ color: `${bookmark.color}` }} />
			)}

			<p className={styles.bookmark_text}>{bookmark.name}</p>
			<Link href={`/bookmarks/${bookmark.id}/edit`} className={styles.bookmark_edit}>
				<BiSolidEdit style={{ color: `${bookmark.color}` }} />
			</Link>
		</a>
	);
}
