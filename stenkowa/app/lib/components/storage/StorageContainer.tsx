'use client';
import StorageSection from './StorageSection';
import styles from './storage.module.scss';
import useStorageItemsOffsetTop from '../../hooks/useStorageItemsOffsetTop';
export default function StorageContainer() {
	const storage = [
		{
			date: 'styczeń 2023',
			items: [
				'Krzesła',
				'Torby prezentowe',
				'Szafka',
				'Toster',
				'Jakieś nowe rzeczy',
			],
		},
		{
			date: 'luty 2023',
			items: ['Xbox One', 'Żelki'],
		},
	];
	useStorageItemsOffsetTop();

	return (
		<div className={styles.container}>
			{storage.map((section, index) => {
				return (
					<StorageSection
						date={section.date}
						items={section.items}
						key={index}
					/>
				);
			})}
		</div>
	);
}
