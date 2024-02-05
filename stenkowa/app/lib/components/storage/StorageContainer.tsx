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
				'Krzesła',
				'Torby prezentowe',
				'Szafka',
				'Toster',
				'Jakieś rzeczy',
			],
		},
		{
			date: 'luty 2023',
			items: ['Xbox One', 'Żelki'],
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
