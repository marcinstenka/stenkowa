import styles from './todo.module.scss';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import Link from 'next/link';
import { calculateTimedifference, formatDate } from '../../functions/functions';



export default function TodoDetails() {
	const tempTodo = {
		id: 1,
		name: 'Zrób pranie',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Phasellus id mollis est. Integer euismod fermentum nunc ut dignissim. In nisl tellus, facilisis eu mi sed, bibendum gravida lectus. Quisque pulvinar tristique metus, ac eleifend magna consequat in.',
		date_added: new Date(2024, 1, 20, 16, 31),
		date_deadline: new Date(2024, 1, 21, 12, 0),
		color: 'hsl(214, 100%, 36%)',
	};

	const { date_added, date_deadline} = formatDate(tempTodo);
	const timeLeft = calculateTimedifference(
		tempTodo.date_added,
		tempTodo.date_deadline
	);
	return (
		<div className={styles.details}>
			<div className={styles.details_header}>
				<h4 style={{ borderColor: `${tempTodo.color}` }}>{tempTodo.name}</h4>
				<div className={styles.details_header_icons}>
					<BiSolidEdit style={{ color: `${tempTodo.color}` }} />
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
			<Link href='/todo' style={{ backgroundColor: `${tempTodo.color}` }}>
				<IoReturnDownBackOutline />
			</Link>
		</div>
	);
}
