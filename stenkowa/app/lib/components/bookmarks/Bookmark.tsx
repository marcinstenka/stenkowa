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

type BookmarkProps = { bookmark: BookmarkType; enableEdit: boolean };
export default function Bookmark({ bookmark, enableEdit }: BookmarkProps) {
	const IconComponent = iconMap[bookmark.icon];

	return (
		<div className={styles.bookmark}>
			<a href={bookmark.link}>
				<div
					style={{ background: `${bookmark.color}` }}
					className={styles.bookmark_color}
				></div>
				{IconComponent && (
					<IconComponent style={{ color: `${bookmark.color}` }} />
				)}

				<p className={styles.bookmark_text}>{bookmark.name}</p>
			</a>
			{enableEdit && (
				<Link
					href={`/bookmarks/${bookmark.id}/edit`}
					className={styles.bookmark_edit}
				>
					<BiSolidEdit style={{ color: `${bookmark.color}` }} />
				</Link>
			)}
		</div>
	);
}
