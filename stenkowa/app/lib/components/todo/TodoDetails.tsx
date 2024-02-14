import styles from './todo.module.scss';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import Link from 'next/link';

function addZero(number: number) {
	if (number < 10) {
		return `0${number.toString()}`;
	}
	return number.toString();
}
function dateInflection(days: number, hours: number, minutes: number) {
	const wordInflection = {
		days: {
			one: 'dzień',
			moreThanOne: 'dni',
		},
		hours: {
			one: 'godzina',
			twoToFour: 'godziny',
			moreThanFour: 'godzin',
		},
		minutes: {
			one: 'minuta',
			twoToFour: 'minuty',
			moreThanFour: 'minut',
		},
	};
	let dayWordInflection = '';
	let hourWordInflection = '';
	let minuteWordInflection = '';
	if (days == 1) dayWordInflection = wordInflection.days.one;
	else if (days > 1) dayWordInflection = wordInflection.days.moreThanOne;

	if (hours == 1) hourWordInflection = wordInflection.hours.one;
	else if (hours > 1 && hours < 5)
		hourWordInflection = wordInflection.hours.twoToFour;
	else if (hours > 1) hourWordInflection = wordInflection.hours.moreThanFour;

	if (minutes == 1) minuteWordInflection = wordInflection.minutes.one;
	else if (minutes > 1 && minutes < 5)
		minuteWordInflection = wordInflection.minutes.twoToFour;
	else if (minutes > 4)
		minuteWordInflection = wordInflection.minutes.moreThanFour;
	return [dayWordInflection, hourWordInflection, minuteWordInflection];
}

function calculateTimedifference(added: Date, deadline: Date) {
	const differenceInMiliSec = Math.abs(added.getTime() - deadline.getTime());

	const days = Math.floor(differenceInMiliSec / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(differenceInMiliSec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor(
		(differenceInMiliSec % (1000 * 60 * 60)) / (1000 * 60)
	);

	const [dayWordInflection, hourWordInflection, minuteWordInflection] =
		dateInflection(days, hours, minutes);

	const formattedParts: string[] = [];
	days > 0 && formattedParts.push(`${days} ${dayWordInflection}`);
	hours > 0 && formattedParts.push(`${hours} ${hourWordInflection}`);
	minutes > 0 && formattedParts.push(`${minutes} ${minuteWordInflection}`);

	const formattedTime = formattedParts.join(', ');
	return formattedTime;
}

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

	const date_added = `${addZero(tempTodo.date_added.getDate())}.${addZero(
		tempTodo.date_added.getMonth()
	)}.${tempTodo.date_added.getFullYear()} | ${addZero(
		tempTodo.date_added.getHours()
	)}:${addZero(tempTodo.date_added.getMinutes())}`;
	const date_deadline = `${addZero(tempTodo.date_deadline.getDay())}.${addZero(
		tempTodo.date_deadline.getMonth()
	)}.${tempTodo.date_deadline.getFullYear()} | ${addZero(
		tempTodo.date_deadline.getHours()
	)}:${addZero(tempTodo.date_deadline.getMinutes())}`;
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
