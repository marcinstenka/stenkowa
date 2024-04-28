'use client';
import styles from '../../styles/details.module.scss';
import { MdColorLens, MdDelete } from 'react-icons/md';
import { StorageItemType } from '../../types/types';
import useStorageItemEdit from '../../hooks/useStorageItemEdit';
import BackButtons from '../global/BackButtons';
import useColorChanging from '../../hooks/useColorChanging';
import { updateStorageItem, deleteStorageItem } from '../../functions/actions';
import { startTransition } from 'react';

export default function StorageItemEditForm(item: StorageItemType) {
	const {
		handleNameChange,
		handleDescriptionChange,
		handleDateAddedChange,
		storageItemName,
		storageItemDescription,
		storageItemAdded,
	} = useStorageItemEdit(item);
	const { color, handleColorChange } = useColorChanging(item.color);
	const updateStorageItemWithId = updateStorageItem.bind(null, item.id);
	const deleteStorageItemWithId = deleteStorageItem.bind(null, item.id);
	
	return (
		<form className={styles.details} action={updateStorageItemWithId}>
			<div className={styles.details_header}>
				<div className={styles.input_container}>
					<input
						type='text'
						name='storageItemName'
						id='storageItemName'
						onChange={handleNameChange}
						value={storageItemName}
						autoComplete='off'
						minLength={3}
						color-changing='border-color'
						style={{ borderColor: `${color}` }}
					/>
					<h4 className={styles.invisible}>{storageItemName}</h4>
				</div>
				<div
					className={`${styles.date_input_container} ${styles.date_short_input_container}`}
				>
					<input
						type='date'
						name='storageItemAdded'
						id='storageItemAdded'
						defaultValue={
							storageItemAdded
								.toLocaleString('sv', { timeZone: 'Europe/Warsaw' })
								.split(' ')[0]
						}
						style={{ borderColor: `${color}` }}
						color-changing='border-color'
						onChange={handleDateAddedChange}
					/>
				</div>
			</div>
			<div className={styles.textarea_container}>
				<div className={styles.details_text}>{storageItemDescription}</div>
				<textarea
					name='storageItemDescription'
					id='storageItemDescription'
					onChange={handleDescriptionChange}
				>
					{storageItemDescription}
				</textarea>
			</div>

			<div className={styles.details_lower}>
				<div className={styles.details_lower_icons}>
					<div className={styles.input_color_container}>
						<MdColorLens
							style={{ color: `${item.color}` }}
							color-changing='color'
						/>
						<input
							type='color'
							name='storageItemColor'
							id='storageItemColor'
							value={color}
							onChange={handleColorChange}
						/>
					</div>
					<MdDelete
						style={{ color: `${color}` }}
						onClick={() =>
							startTransition(() => {
								deleteStorageItemWithId();
							})
						}
					/>
				</div>
			</div>
			<BackButtons href={`/storage/${item.id}`} color={color} />
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
