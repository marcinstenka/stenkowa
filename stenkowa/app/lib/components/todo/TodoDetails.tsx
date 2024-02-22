import styles from '../../styles/details.module.scss';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import Link from 'next/link';
import { calculateTimedifference, formatDate } from '../../functions/functions';
import { TodoType } from '../../types/types';

export default function TodoDetails() {
	const tempTodo: TodoType = {
		id: 1,
		name: 'Zrób pranie',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Phasellus id mollis est. Integer euismod fermentum nunc ut dignissim. In nisl tellus, facilisis eu mi sed, bibendum gravida lectus. Quisque pulvinar tristique metus, ac eleifend magna consequat in.',
		date_added: new Date(2024, 1, 20, 16, 31),
		date_deadline: new Date(2024, 1, 21, 12, 0),
		color: '#0050b8',
	};

	const date_added = formatDate(tempTodo.date_added, true);
	const date_deadline = formatDate(tempTodo.date_deadline, true);

	const timeLeft = calculateTimedifference(
		tempTodo.date_added,
		tempTodo.date_deadline
	);
	return (
		<div className={styles.details}>
			<div className={styles.details_header}>
				<h4 style={{ borderColor: `${tempTodo.color}` }}>{tempTodo.name}</h4>
				<div className={styles.details_header_icons}>
					<Link href={`/todo/${tempTodo.id}/edit`}>
						<BiSolidEdit style={{ color: `${tempTodo.color}` }} />
					</Link>
					<MdDelete style={{ color: `${tempTodo.color}` }} />
				</div>
			</div>
			<div className={styles.details_text}>{tempTodo.details}</div>
			<div className={styles.details_dates}>
				<div className={styles.details_date}>
					<p>Dodane:</p>
					<p style={{ borderColor: `${tempTodo.color}` }}>Deadline:</p>
				</div>
				<div className={styles.details_date}>
					<p>{date_added}</p>
					<p style={{ borderColor: `${tempTodo.color}` }}>{date_deadline}</p>
				</div>
			</div>
			<h3>
				Zostało: <span style={{ color: `${tempTodo.color}` }}>{timeLeft}</span>
			</h3>
			<Link
				className={styles.details_back}
				href='/todo'
				style={{ backgroundColor: `${tempTodo.color}` }}
			>
				<IoReturnDownBackOutline />
			</Link>
		</div>
	);
}
