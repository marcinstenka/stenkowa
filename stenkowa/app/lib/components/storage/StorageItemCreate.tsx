'use client';
import { useFormState } from 'react-dom';
import useColorChanging from '../../hooks/useColorChanging';
import styles from '../../styles/create.module.scss';
import BackButtons from '../global/BackButtons';
import { createStorageItem } from '../../functions/actions';
export default function StorageItemCreate() {
	const { color, handleColorChange } = useColorChanging('');
	const initialState = { message: '' };
	const [state, dispatch] = useFormState(createStorageItem, initialState);
	return (
		<div className={styles.container}>
			<h3 color-changing='border-color'>Dodaj nowy przedmiot</h3>
			<form action={dispatch}>
				<div className={styles.input_container}>
					<label htmlFor='storageItemName' color-changing='border-color'>
						Nazwa:
					</label>
					<input type='text' name='storageItemName' id='storageItemName' />
				</div>
				<div className={styles.input_container}>
					<label htmlFor='storageItemDescription' color-changing='border-color'>
						Opis:
					</label>
					<textarea name='storageItemDescription' id='storageItemDescription' />
				</div>
				<div className={styles.date_container}>
					<label htmlFor='storageItemAdded' color-changing='border-color'>
						Wprowadzenie:
					</label>
					<input
						type='date'
						name='storageItemAdded'
						id='storageItemAdded'
						defaultValue={new Date().toISOString().slice(0, 10)}
					/>
				</div>

				<div className={styles.color_container}>
					<label htmlFor='storageItemColor' color-changing='border-color'>
						Kolor:
					</label>
					<input
						type='color'
						name='storageItemColor'
						id='storageItemColor'
						defaultValue='#0050b8'
						onChange={handleColorChange}
					/>
				</div>
				<BackButtons href='/storage' color={color} />
			</form>
		</div>
	);
}
