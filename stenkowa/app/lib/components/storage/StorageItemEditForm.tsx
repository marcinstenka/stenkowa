'use client';
import styles from '../../styles/details.module.scss';
import { MdColorLens, MdDelete } from 'react-icons/md';
import { StorageItemType } from '../../types/types';
import useStorageItemEdit from '../../hooks/useStorageItemEdit';
import BackButtons from '../global/BackButtons';
import useColorChanging from '../../hooks/useColorChanging';

export default function StorageItemEditForm(item: StorageItemType) {
	const {
		handleHeaderChange,
		handleDetailsChange,
		handleDateAddedChange,
		details_header,
		details,
		date_added,
	} = useStorageItemEdit(item);
	const { color, handleColorChange } = useColorChanging();
	return (
		<div className={styles.details}>
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
				<div
					className={`${styles.date_input_container} ${styles.date_short_input_container}`}
				>
					<input
						type='date'
						name='details_date'
						id='details_date'
						defaultValue={date_added.toISOString().substr(0, 10)}
						style={{ borderColor: `${color}` }}
						color-changing='border-color'
						onChange={handleDateAddedChange}
					/>
				</div>
			</div>
			<div className={styles.textarea_container}>
				<div className={styles.details_text}>{details}</div>
				<textarea
					name='details_text'
					id='details_text'
					onChange={handleDetailsChange}
				>
					{details}
				</textarea>
			</div>

			<div className={styles.details_lower}>
				<p
					className={styles.details_edit_info}
					style={{ borderColor: `${color}` }}
					color-changing='border-color'
				>
					Kliknij element, aby zmienić
				</p>
				<div className={styles.details_lower_icons}>
					<div className={styles.input_color_container}>
						<MdColorLens
							style={{ color: `${item.color}` }}
							color-changing='color'
						/>
						<input
							type='color'
							name='details_color'
							id='details_color'
							value={color}
							onChange={handleColorChange}
						/>
					</div>
					<MdDelete style={{ color: `${color}` }} />
				</div>
			</div>
			<BackButtons href={`/storage/${item.id}`} color={color} />
		</div>
	);
}
