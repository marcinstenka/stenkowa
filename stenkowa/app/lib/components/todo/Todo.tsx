import styles from './todo.module.scss';
import { TodoType } from '../../types/types';
type TodoProps = {
	todo: TodoType;
};
export default function Todo({ todo }: TodoProps) {
	return (
		<div className={styles.todo}>
			<div
				style={{ background: todo.color }}
				className={styles.todo_color}
			></div>
			<p className={styles.todo_text}>{todo.text}</p>
		</div>
	);
}
