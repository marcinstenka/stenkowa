import styles from '../../styles/details.module.scss';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import Link from 'next/link';
import { calculateTimedifference, formatDate } from '../../functions/functions';
import { TodoType } from '../../types/types';
import { fetchTodo } from '../../functions/data';
import { startTransition } from 'react';
import { deleteTodo } from '../../functions/actions';

type TodoDetailsProps = { id: number };

export default async function TodoDetails({ id }: TodoDetailsProps) {
	const todo: TodoType | undefined = await fetchTodo(id);
	if (!todo) return;
	const date_added = formatDate(todo.date_added, true);
	const date_deadline = formatDate(todo.date_deadline, true);

	const timeLeft = calculateTimedifference(todo.date_deadline);

	const deleteTodoWithId = deleteTodo.bind(null, todo.id);
	return (
		<div className={styles.details}>
			<div className={styles.details_header}>
				<h4 style={{ borderColor: `${todo.color}` }}>{todo.name}</h4>
				<div className={styles.details_header_icons}>
					<Link href={`/todo/${todo.id}/edit`}>
						<BiSolidEdit style={{ color: `${todo.color}` }} />
					</Link>
					<form action={deleteTodoWithId}>
						<button className={styles.details_delete}>
							<MdDelete style={{ color: `${todo.color}` }} />
						</button>
					</form>
				</div>
			</div>
			<div className={styles.details_text}>{todo.description}</div>
			<div className={styles.details_dates}>
				<div className={styles.details_date}>
					<p>Dodane:</p>
					<p style={{ borderColor: `${todo.color}` }}>Deadline:</p>
				</div>
				<div className={styles.details_date}>
					<p>{date_added}</p>
					<p style={{ borderColor: `${todo.color}` }}>{date_deadline}</p>
				</div>
			</div>
			<h3>
				{timeLeft.isTimeExpired ? '' : <span>Zostało: </span>}
				<span style={{ color: `${todo.color}` }} color-changing='color'>
					{timeLeft.formattedTime}
				</span>
			</h3>
			<Link
				className={styles.details_back}
				href='/todo'
				style={{ backgroundColor: `${todo.color}` }}
			>
				<IoReturnDownBackOutline />
			</Link>
		</div>
	);
}
