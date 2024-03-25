'use client';
import useTodoEdit from '../../hooks/useTodoEdit';
import { TodoType } from '../../types/types';
import styles from '../../styles/details.module.scss';
import { MdDelete, MdColorLens } from 'react-icons/md';
import BackButtons from '../global/BackButtons';
import useColorChanging from '../../hooks/useColorChanging';
import { deleteTodo, updateTodo } from '../../functions/actions';
import { startTransition } from 'react';

export default function TodoEditForm(todo: TodoType) {
	const {
		handleHeaderChange,
		handleDescriptionChange,
		handleDateAddedChange,
		handleDateDeadlineChange,
		details_header,
		date_deadline,
		date_added,
		description,
		timeLeft,
	} = useTodoEdit(todo);
	console.log(date_deadline.toString());
	console.log(date_deadline.toISOString());
	const { color, handleColorChange } = useColorChanging(todo.color);
	const updateTodoWithId = updateTodo.bind(null, todo.id);
	
	return (
		<form className={styles.details} action={updateTodoWithId}>
			<div className={styles.details_header}>
				<div className={styles.input_container}>
					<input
						type='text'
						name='details_header'
						id='details_header'
						onChange={handleHeaderChange}
						value={details_header}
						autoComplete='off'
						minLength={3}
						color-changing='border-color'
						style={{ borderColor: `${color}` }}
					/>
					<h4 className={styles.invisible}>{details_header}</h4>
				</div>
				<div className={styles.details_header_icons}>
					<div className={styles.input_color_container}>
						<MdColorLens style={{ color: `${color}` }} color-changing='color' />
						<input
							type='color'
							name='details_color'
							id='details_color'
							value={color}
							onChange={handleColorChange}
						/>
					</div>
					<button
						className={styles.details_delete}
						onClick={() =>
							startTransition(() => {
								deleteTodo(todo.id);
							})
						}
					>
						<MdDelete style={{ color: `${color}` }} color-changing='color' />
					</button>
				</div>
			</div>
			<div className={styles.textarea_container}>
				<div className={styles.details_text}>{description}</div>
				<textarea
					name='details_text'
					id='details_text'
					onChange={handleDescriptionChange}
				>
					{description}
				</textarea>
			</div>

			<div className={styles.details_dates}>
				<div className={styles.details_date}>
					<p>Dodane:</p>
					<p style={{ borderColor: `${color}` }} color-changing='border-color'>
						Deadline:
					</p>
				</div>
				<div className={styles.details_date}>
					<div className={styles.date_input_container}>
						<input
							type='datetime-local'
							name='date_added'
							id='date_added'
							defaultValue={date_added.toISOString().slice(0, 16)}
							onChange={handleDateAddedChange}
							readOnly
						/>
					</div>
					<div className={styles.date_input_container}>
						<input
							type='datetime-local'
							name='date_deadline'
							id='date_deadline'
							defaultValue={date_deadline.toISOString().slice(0, 16)}
							style={{ borderColor: `${color}` }}
							color-changing='border-color'
							onChange={handleDateDeadlineChange}
							step={'any'}
						/>
					</div>
				</div>
			</div>
			<h3>
				{timeLeft.isTimeExpired ? '' : <span>Zostało: </span>}
				<span style={{ color: `${color}` }} color-changing='color'>
					{timeLeft.formattedTime}
				</span>
			</h3>

			<BackButtons href={`/todo/${todo.id}`} color={color} />
			<p
				className={styles.details_edit_info}
				style={{ borderColor: `${color}` }}
				color-changing='border-color'
			>
				Kliknij element, aby zmienić
			</p>
		</form>
	);
}
