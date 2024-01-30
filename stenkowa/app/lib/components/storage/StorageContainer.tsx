import StorageSection from './StorageSection';
import styles from './storage.module.scss';

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
	return (
		<div className={styles.container}>
			{storage.map((section) => {
				return <StorageSection date={section.date} items={section.items} />;
			})}
		</div>
	);
}
