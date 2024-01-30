import styles from './todo.module.scss';

type TodoProps = {
	color: string;
	text: string;
};
export default function Todo({ color, text }: TodoProps) {
	return (
		<div className={styles.todo}>
			<div style={{ background: color }} className={styles.todo_color}></div>
			<p className={styles.todo_text}>{text}</p>
		</div>
	);
}
