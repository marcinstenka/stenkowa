'use client';
import BackButtons from '../global/BackButtons';
import useColorChanging from '../../hooks/useColorChanging';
import { useFormState } from 'react-dom';
import { createTodo } from '../../functions/actions';
import styles from '../../styles/create.module.scss';

export default function TodoCreate() {
	const { color, handleColorChange } = useColorChanging('');
	const initialState = { message: '' };
	const [state, dispatch] = useFormState(createTodo, initialState);
	return (
		<div className={styles.container}>
			<h3 color-changing='border-color'>Dodaj nowe todo</h3>
			<form action={dispatch}>
				<div className={styles.input_container}>
					<label htmlFor='todoName' color-changing='border-color'>
						Nazwa:
					</label>
					<input type='text' name='todoName' id='todoName' required />
				</div>
				<div className={styles.input_container}>
					<label htmlFor='todoDescription' color-changing='border-color'>
						Opis:
					</label>
					<textarea name='todoDescription' id='todoDescription' />
				</div>
				<div className={styles.date_container}>
					<label htmlFor='todoAdded' color-changing='border-color'>
						Dodano:
					</label>
					<input
						type='datetime-local'
						name='todoAdded'
						id='todoAdded'
						defaultValue={new Date()
							.toLocaleString('sv', { timeZone: 'Europe/Warsaw' })
							.replace(',', '')}
						required
						readOnly
					/>
				</div>
				<div className={styles.date_container}>
					<label htmlFor='todoDeadline' color-changing='border-color'>
						Deadline:
					</label>
					<input
						type='datetime-local'
						name='todoDeadline'
						id='todoDeadline'
						defaultValue={new Date()
							.toLocaleString('sv', { timeZone: 'Europe/Warsaw' })
							.replace(',', '')}
						required
						step={'any'}
					/>
				</div>
				<div className={styles.color_container}>
					<label htmlFor='todoColor' color-changing='border-color'>
						Kolor:
					</label>
					<input
						type='color'
						name='todoColor'
						id='todoColor'
						defaultValue='#0050b8'
						onChange={handleColorChange}
						required
					/>
				</div>
				<BackButtons href='/todo' color={color} />
			</form>
		</div>
	);
}
