import styles from './todo.module.scss';
export default function TodoContainer() {
	return (
		<div className={styles.container}>
			<div className={styles.todo}>
				<div className={styles.todo_color}></div>
				<p className={styles.todo_text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim.  
				</p>
			</div>
			<div className={styles.todo}>
				<div className={styles.todo_color}></div>
				<p className={styles.todo_text}>
					Quis autem vel eum iure reprehenderit qui in ea voluptate.
				</p>
			</div>
		</div>
	);
}
