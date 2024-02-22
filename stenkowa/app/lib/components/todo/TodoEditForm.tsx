'use client';
import styles from '../../styles/details.module.scss';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { MdDelete, MdDone } from 'react-icons/md';
import { calculateTimedifference, formatDate } from '../../functions/functions';

import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { TodoType } from '../../types/types';

export default function TodoEditForm(todo: TodoType) {
	const date_added = formatDate(todo.date_added, true);
	const date_deadline = formatDate(todo.date_deadline, true);

	const timeLeft = calculateTimedifference(todo.date_added, todo.date_deadline);

	const [details_header, setDetails_header] = useState(todo.name);
	const [details, setDetails] = useState(todo.details);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const length = e.target.value.length;
		if (length > 30 || length < 1) {
			return;
		}
		setDetails_header(e.target.value);
	};
	const handleChange2 = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setDetails(e.target.value);
	};
	return (
		<form className={styles.details}>
			<div className={styles.details_header}>
				<div className={styles.input_container}>
					<input
						type='text'
						name='details_header'
						id='details_header'
						onChange={handleChange}
						value={details_header}
						autoComplete='off'
						style={{ borderColor: `${todo.color}` }}
					/>
					<h4 className={styles.invisible}>{details_header}</h4>
				</div>
				<div className={styles.details_header_icons}>
					<MdDelete style={{ color: `${todo.color}` }} />
				</div>
			</div>
			<div className={styles.textarea_container}>
				<div className={styles.details_text}>{details}</div>
				<textarea
					name='details_text'
					id='details_text'
					onChange={handleChange2}
				>
					{details}
				</textarea>
			</div>

			<div className={styles.details_dates}>
				<div className={styles.details_date}>
					<p>Dodane:</p>
					<p style={{ borderColor: `${todo.color}` }}>Deadline:</p>
				</div>
				<div className={styles.details_date}>
					<div className={styles.date_input_container}>
						<input
							type='datetime-local'
							name='details_date'
							id='details_date'
							defaultValue={todo.date_added.toISOString().slice(0, 16)}
						/>
					</div>
					<div className={styles.date_input_container}>
						<input
							type='datetime-local'
							name='details_date'
							id='details_date'
							defaultValue={todo.date_deadline.toISOString().slice(0, 16)}
							style={{ borderColor: `${todo.color}` }}
						/>
					</div>
				</div>
			</div>
			<h3>
				Zostało: <span style={{ color: `${todo.color}` }}>{timeLeft}</span>
			</h3>
			<p
				className={styles.details_edit_info}
				style={{ borderColor: `${todo.color}` }}
			>
				Kliknij element, aby zmienić
			</p>
			<div className={styles.details_back_button}>
				<Link
					className={styles.details_back}
					href='/todo'
					style={{ backgroundColor: `${todo.color}` }}
				>
					<IoReturnDownBackOutline />
				</Link>
				<Link
					className={styles.details_back}
					href='/todo'
					style={{ backgroundColor: `${todo.color}` }}
				>
					<MdDone />
				</Link>
			</div>
		</form>
	);
}
