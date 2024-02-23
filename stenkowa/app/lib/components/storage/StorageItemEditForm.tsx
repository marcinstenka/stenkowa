'use client';
import styles from '../../styles/details.module.scss';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { MdDelete, MdDone } from 'react-icons/md';
import Link from 'next/link';
import { StorageItem, TodoType } from '../../types/types';
import useTodoEdit from '../../hooks/useTodoEdit';
import { BiSolidEdit } from 'react-icons/bi';
import { formatDate } from '../../functions/functions';

export default function StorageItemEditForm(item: StorageItem) {
	console.log(item.date_added);
	const date_added = formatDate(item.date_added, false);
	return (
		<div className={styles.details}>
			<div className={styles.details_header}>
				<h4 style={{ borderColor: `${item.color}` }}>{item.name}</h4>
				<div
					className={`${styles.date_input_container} ${styles.date_short_input_container}`}
				>
					<input
						type='date'
						name='details_date'
						id='details_date'
						defaultValue={item.date_added.toISOString().substr(0, 10)}
						style={{ borderColor: `${item.color}` }}
						color-changing='border-color'
						// onChange={handleDateDeadlineChange}
					/>
				</div>
			</div>
			<div className={styles.details_text}>{item.details}</div>

			<div className={styles.details_lower}>
				<p style={{ borderColor: `${item.color}` }}>
					Dodane przez: {item.user}
				</p>
				<div className={styles.details_lower_icons}>
					<MdDelete style={{ color: `${item.color}` }} />
				</div>
			</div>
			<div className={styles.details_back_button}>
				<Link
					className={styles.details_back}
					href='/storage'
					style={{ backgroundColor: `${item.color}` }}
					color-changing='background'
				>
					<IoReturnDownBackOutline />
				</Link>
				<Link
					className={styles.details_back}
					href='/storage'
					style={{ backgroundColor: `${item.color}` }}
					color-changing='background'
				>
					<MdDone />
				</Link>
			</div>
		</div>
	);
}
