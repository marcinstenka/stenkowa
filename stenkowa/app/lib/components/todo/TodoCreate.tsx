import styles from '../../styles/create.module.scss';
import BackButtons from '../global/BackButtons';
export default function TodoCreate() {
	return (
		<div className={styles.container}>
			<h3>Dodaj nowe todo</h3>
			<form action=''>
				<div className={styles.input_container}>
					<label htmlFor='new_todo_name'>Nazwa:</label>
					<input type='text' name='new_todo_name' id='new_todo_name' />
				</div>
				<div className={styles.input_container}>
					<label htmlFor='new_todo_description'>Opis:</label>
					<textarea name='new_todo_description' id='new_todo_description' />
				</div>
				<div className={styles.date_container}>
					<label htmlFor='new_todo_added'>Początek:</label>
					<input
						type='datetime-local'
						name='new_todo_added'
						id='new_todo_added'
						defaultValue={new Date().toISOString().slice(0, 16)}
					/>
				</div>
				<div className={styles.date_container}>
					<label htmlFor='new_todo_deadline'>Deadline:</label>
					<input
						type='datetime-local'
						name='new_todo_deadline'
						id='new_todo_deadline'
						defaultValue={new Date().toISOString().slice(0, 16)}
					/>
				</div>
				<div className={styles.color_container}>
					<label htmlFor='new_todo_color'>Kolor:</label>
					<input
						type='color'
						name='new_todo_color'
						id='new_todo_color'
						defaultValue='#0050b8'
					/>
				</div>
				<BackButtons href='/todo' color='#0050b8' />
			</form>
		</div>
	);
}
