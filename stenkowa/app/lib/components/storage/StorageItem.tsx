import styles from './storage.module.scss';
import { StorageItemType } from '../../types/types';
import Link from 'next/link';

export default function StorageItem(item: StorageItemType) {
	return (
		<Link
			href={`/storage/${item.id}`}
			className={styles.storage_item}
			style={{ borderColor: item.color }}
		>
			{item.name}
		</Link>
	);
}
