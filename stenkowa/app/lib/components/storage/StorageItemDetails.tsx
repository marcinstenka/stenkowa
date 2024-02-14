import styles from './storage.module.scss';
import { MdDelete } from 'react-icons/md';
import { BiSolidEdit } from 'react-icons/bi';
import { formatDate } from '../../functions/functions';
export default function StorageItemDetails() {
	const tempItem = {
		name: 'Zrobić pranie',
		color: 'hsl(214, 100%, 36%)',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		date_added: new Date(2023, 1, 12),
		user: 'Marcin',
	};
    const date_added = formatDate(tempItem.date_added, false);
	return (
		<div className={styles.details}>
			<div className={styles.details_header}>
				<h4 style={{ borderColor: `${tempItem.color}` }}>{tempItem.name}</h4>
				<p style={{ borderColor: `${tempItem.color}` }}>{date_added}</p>
			</div>
			<div className={styles.details_text}>{tempItem.details}</div>

			<div className={styles.details_lower}>
				<p style={{ borderColor: `${tempItem.color}` }}>
					Dodane przez: {tempItem.user}
				</p>
				<div className={styles.details_lower_icons}>
					<BiSolidEdit style={{ color: `${tempItem.color}` }} />
					<MdDelete style={{ color: `${tempItem.color}` }} />
				</div>
			</div>
		</div>
	);
}
