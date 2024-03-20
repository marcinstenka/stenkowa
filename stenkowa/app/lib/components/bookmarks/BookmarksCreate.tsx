'use client';
import { useFormState } from 'react-dom';
import useColorChanging from '../../hooks/useColorChanging';
import styles from '../../styles/create.module.scss';
import BackButtons from '../global/BackButtons';
import BookmarkIconSelect from './BookmarkIconSelect';
import { createBookmark } from '../../functions/actions';

export default function BookmarksCreate() {
	const { color, handleColorChange } = useColorChanging('');
	const initialState = { message: '' };
	const [state, dispatch] = useFormState(createBookmark, initialState);

	return (
		<div className={styles.container}>
			<h3 color-changing='border-color'>Dodaj nową zakładkę</h3>
			<form action={dispatch}>
				<div className={styles.input_container}>
					<label htmlFor='new_bookmark_name' color-changing='border-color'>
						Nazwa:
					</label>
					<input
						type='text'
						name='new_bookmark_name'
						id='new_bookmark_name'
						required
					/>
				</div>
				<div className={styles.input_container}>
					<label htmlFor='new_bookmark_link' color-changing='border-color'>
						Link:
					</label>
					<input
						type='text'
						name='new_bookmark_link'
						id='new_bookmark_link'
						required
					/>
				</div>
				<div className={styles.icon_container}>
					<label htmlFor='new_bookmark_icon' color-changing='border-color'>
						Ikona:
					</label>
					<BookmarkIconSelect color={color} value='' />
				</div>
				<div className={styles.color_container}>
					<label htmlFor='new_bookmark_color' color-changing='border-color'>
						Kolor:
					</label>
					<input
						type='color'
						name='new_bookmark_color'
						id='new_bookmark_color'
						defaultValue='#0050b8'
						onChange={handleColorChange}
					/>
				</div>
				<BackButtons href='/bookmarks' color={color} />
			</form>
		</div>
	);
}
