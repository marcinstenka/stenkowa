import styles from './bookmarkzs.module.scss';
import Link from 'next/link';

import { BookmarkType } from '../../types/types';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { FaFacebookMessenger, FaMoneyCheckDollar } from 'react-icons/fa6';
import {
	FaBook,
	FaBusAlt,
	FaCarAlt,
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaPlane,
	FaStackOverflow,
	FaYoutube,
} from 'react-icons/fa';
import { SiGmail, SiNetflix } from 'react-icons/si';
import { IoIosDocument } from 'react-icons/io';
import { MdOutlineGTranslate } from 'react-icons/md';
import { CiMail } from 'react-icons/ci';
import { BiSolidEdit } from 'react-icons/bi';

type IconMap = {
	[key: string]: React.ElementType;
};

const iconMap: IconMap = {
	FaFacebookMessenger,
	FaMoneyCheckDollar,
	TiWeatherPartlySunny,
	FaBook,
	FaBusAlt,
	FaCarAlt,
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaPlane,
	FaStackOverflow,
	FaYoutube,
	SiGmail,
	SiNetflix,
	IoIosDocument,
	MdOutlineGTranslate,
	CiMail,
};

type BookmarkProps = { bookmark: BookmarkType; enableEdit: boolean };
export default function Bookmark({ bookmark, enableEdit }: BookmarkProps) {
	const IconComponent = iconMap[bookmark.icon];

	return (
		<div className={styles.bookmark}>
			<div
				style={{ background: `${bookmark.color}` }}
				className={styles.bookmark_color}
			></div>
			<Link className={styles.bookmark_link} href={bookmark.link}>
				{IconComponent && (
					<IconComponent style={{ color: `${bookmark.color}` }} />
				)}

				<p className={styles.bookmark_text}>{bookmark.name}</p>
			</Link>
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
