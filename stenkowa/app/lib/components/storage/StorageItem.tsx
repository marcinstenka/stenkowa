import styles from './storage.module.scss';
import { StorageItem } from '../../types/types';
import Link from 'next/link';

export default function StorageItem(item: StorageItem) {
	return (
		<Link
			href={`/storage/${item.id}`}
			className={styles.storage_item}
			style={{ borderColor: item.color }}
		>
			{item.text}
		</Link>
	);
}
