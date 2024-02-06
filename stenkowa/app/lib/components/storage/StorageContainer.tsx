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
				{ text: 'Krzesła', color: 'red' },
				{ text: 'Torby prezentowe', color: 'orange' },
				{ text: 'Szafka', color: '#964000' },
				{ text: 'Toster', color: '#eb9605' },
				{ text: 'Jakieś rzeczy', color: '#bc544b' },
			],
		},
		{
			date: 'luty 2023',
			items: [
				{ text: 'Xbox One', color: 'var(--primary)' },
				{ text: 'Żelki', color: 'blue' },
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
