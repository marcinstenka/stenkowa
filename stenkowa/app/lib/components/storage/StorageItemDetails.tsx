import styles from '../../styles/details.module.scss';
import { MdDelete } from 'react-icons/md';
import { BiSolidEdit } from 'react-icons/bi';
import { formatDate } from '../../functions/functions';
import Link from 'next/link';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import {
	fetchStorageItem,
	fetchUserNameWithStorageId,
} from '../../functions/data';
type StorageItemDetailsProps = {
	id: number;
};
export default async function StorageItemDetails({
	id,
}: StorageItemDetailsProps) {
	const storageItem = await fetchStorageItem(id);
	if (!storageItem) return;
	const user = await fetchUserNameWithStorageId(storageItem?.storage_id);
	if (!user) return;
	const date_added = formatDate(storageItem.insert_date, false);
	return (
		<div className={styles.details}>
			<div className={styles.details_header}>
				<h4 style={{ borderColor: `${storageItem.color}` }}>
					{storageItem.name}
				</h4>
				<p style={{ borderColor: `${storageItem.color}` }}>{date_added}</p>
			</div>
			<div className={styles.details_text}>{storageItem.description}</div>

			<div className={styles.details_lower}>
				<p style={{ borderColor: `${storageItem.color}` }}>
					Dodane przez: {user.user_name}
				</p>
				<div className={styles.details_lower_icons}>
					<Link href={`/storage/${storageItem.id}/edit`}>
						<BiSolidEdit style={{ color: `${storageItem.color}` }} />
					</Link>
					<MdDelete style={{ color: `${storageItem.color}` }} />
				</div>
			</div>
			<Link
				className={styles.details_back}
				href='/storage'
				style={{ backgroundColor: `${storageItem.color}` }}
			>
				<IoReturnDownBackOutline />
			</Link>
		</div>
	);
}
