import Link from 'next/link';
import { TodoType } from '../../types/types';
import styles from './todo.module.scss';


export default function Todo( todo : TodoType) {
	return (
		<Link href={`/todo/${todo.id}`} className={styles.todo}>
			<div
				style={{ background: todo.color }}
				className={styles.todo_color}
			></div>
			<p className={styles.todo_text}>{todo.name}</p>
		</Link>
	);
}
