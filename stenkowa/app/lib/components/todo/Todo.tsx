import styles from './todo.module.scss';
import { TodoType } from '../../types/types';
import Link from 'next/link';
type TodoProps = {
	todo: TodoType;
};
export default function Todo({ todo }: TodoProps) {
	return (
		<Link href={`/todo/${todo.id}`} className={styles.todo}>
			<div
				style={{ background: todo.color }}
				className={styles.todo_color}
			></div>
			<p className={styles.todo_text}>{todo.text}</p>
		</Link>
	);
}
