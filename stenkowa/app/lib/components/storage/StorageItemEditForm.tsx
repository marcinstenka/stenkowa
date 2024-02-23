'use client';
import styles from '../../styles/details.module.scss';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { MdDelete, MdDone } from 'react-icons/md';
import Link from 'next/link';
import { TodoType } from '../../types/types';
import useTodoEdit from '../../hooks/useTodoEdit';
import { BiSolidEdit } from 'react-icons/bi';
import { formatDate } from '../../functions/functions';

export default function StorageItemEditForm() {
	const tempItem = {
		name: 'Zrobić pranie',
		color: '#0050b8',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		date_added: new Date(2023, 1, 12),
		user: 'Marcin',
	};
	const date_added = formatDate(tempItem.date_added, false);
	return (
		<div className={styles.details}>
			<div className={styles.details_header}>
				<h4 style={{ borderColor: `${tempItem.color}` }}>{tempItem.name}</h4>
				<p style={{ borderColor: `${tempItem.color}` }}>{date_added}</p>
			</div>
			<div className={styles.details_text}>{tempItem.details}</div>

			<div className={styles.details_lower}>
				<p style={{ borderColor: `${tempItem.color}` }}>
					Dodane przez: {tempItem.user}
				</p>
				<div className={styles.details_lower_icons}>
					<BiSolidEdit style={{ color: `${tempItem.color}` }} />
					<MdDelete style={{ color: `${tempItem.color}` }} />
				</div>
			</div>
			<Link
				className={styles.details_back}
				href='/storage'
				style={{ backgroundColor: `${tempItem.color}` }}
			>
				<IoReturnDownBackOutline />
			</Link>
		</div>
	);
}
