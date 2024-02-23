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
				{
					id: 1,
					name: 'Krzesła',
					color: 'red',
					details: '',
					date_added: new Date(),
					user: 'Marcin',
				},
				{
					id: 2,
					name: 'Torby prezentowe',
					color: 'orange',
					details: '',
					date_added: new Date(),
					user: 'Marcin',
				},
				{
					id: 3,
					name: 'Szafka',
					color: '#964000',
					details: '',
					date_added: new Date(),
					user: 'Marcin',
				},
				{
					id: 4,
					name: 'Toster',
					color: '#eb9605',
					details: '',
					date_added: new Date(),
					user: 'Marcin',
				},
				{
					id: 5,
					name: 'Jakieś rzeczy',
					color: '#bc544b',
					details: '',
					date_added: new Date(),
					user: 'Marcin',
				},
			],
		},
		{
			date: 'luty 2023',
			items: [
				{
					id: 6,
					name: 'Xbox One',
					color: 'var(--primary)',
					details: '',
					date_added: new Date(),
					user: 'Marcin',
				},
				{
					id: 7,
					name: 'Żelki',
					color: 'blue',
					details: '',
					date_added: new Date(),
					user: 'Marcin',
				},
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
