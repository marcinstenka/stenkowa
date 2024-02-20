'use client';
import styles from '../../styles/details.module.scss';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { MdDelete, MdDone } from 'react-icons/md';
import { calculateTimedifference, formatDate } from '../../functions/functions';

type TodoEditFormProps = {
	//change to proper Todo type
	todo: {
		id: number;
		name: string;
		details: string;
		date_added: Date;
		date_deadline: Date;
		color: string;
	};
};

import Link from 'next/link';
export default function TodoEditForm({ todo }: TodoEditFormProps) {
	const date_added = formatDate(todo.date_added, true);
	const date_deadline = formatDate(todo.date_deadline, true);

	const timeLeft = calculateTimedifference(todo.date_added, todo.date_deadline);
	return (
		<form className={styles.details}>
			<div className={styles.details_header}>
				<div className={styles.input_container}>
					<h4 style={{ borderColor: `${todo.color}` }}>{todo.name}</h4>
					<input type='text' name='details_header' id='details_header' />
				</div>
				<div className={styles.details_header_icons}>
					<MdDelete style={{ color: `${todo.color}` }} />
				</div>
			</div>
			<div className={styles.details_text}>
				{todo.details}
				<textarea name='details_text' id='details_text'></textarea>
			</div>
			<div className={styles.details_dates}>
				<div className={styles.details_date}>
					<p>Dodane:</p>
					<p style={{ borderColor: `${todo.color}` }}>Deadline:</p>
				</div>
				<div className={styles.details_date}>
					<div className={styles.input_container}>
						<p>{date_added}</p>
						<input type='date' name='details_date' id='details_date' />
					</div>
					<div className={styles.input_container}>
						<p style={{ borderColor: `${todo.color}` }}>{date_deadline}</p>
						<input type='date' name='details_date' id='details_date' />
					</div>
				</div>
			</div>
			<h3>
				Zostało: <span style={{ color: `${todo.color}` }}>{timeLeft}</span>
			</h3>
			<Link href='/todo' style={{ backgroundColor: `${todo.color}` }}>
				<IoReturnDownBackOutline />
			</Link>
		</form>
	);
}
