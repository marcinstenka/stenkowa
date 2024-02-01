'use client';
import { useState } from 'react';
import StorageSection from './StorageSection';
import useStorageItemsOffsetTop from '../../hooks/useStorageItemsOffsetTop';
import { StorageSectionType } from '../../types/types';
import styles from './storage.module.scss';
export default function StorageContainer() {
	const [storage, setStorage] = useState<StorageSectionType[]>([
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
	]);
	useStorageItemsOffsetTop(storage);

	return (
		<div className={styles.container}>
			{storage.map((section, index) => {
				return (
					<StorageSection
						section={section}
						key={index}
					/>
				);
			})}
		</div>
	);
}
