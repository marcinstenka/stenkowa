'use client';
import styles from './storage.module.scss';
import StorageSection from './StorageSection';
import useStorageItemsOffsetTop from '../../hooks/useStorageItemsOffsetTop';
import { StorageSectionType } from '../../types/types';

export default function StorageContainer() {
	const storage: StorageSectionType[] = [
		{
			date: 'styczeń 2023',
			items: [
				{ id: 1, text: 'Krzesła', color: 'red' },
				{ id: 2, text: 'Torby prezentowe', color: 'orange' },
				{ id: 3, text: 'Szafka', color: '#964000' },
				{ id: 4, text: 'Toster', color: '#eb9605' },
				{ id: 5, text: 'Jakieś rzeczy', color: '#bc544b' },
			],
		},
		{
			date: 'luty 2023',
			items: [
				{ id: 6, text: 'Xbox One', color: 'var(--primary)' },
				{ id: 7, text: 'Żelki', color: 'blue' },
			],
		},
	];
	useStorageItemsOffsetTop(storage);

	return (
		<div className={styles.container}>
			{storage.map((section, index) => {
				return <StorageSection section={section} key={index} />;
			})}
		</div>
	);
}
