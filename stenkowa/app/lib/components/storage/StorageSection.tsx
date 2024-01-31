import styles from './storage.module.scss';
type StorageSectionProps = {
	date: string;
	items: string[];
};

export default function StorageSection({ date, items }: StorageSectionProps) {
	
	return (
		<section className={styles.storage_section}>
			<h3 className={styles.storage_date}>{date}</h3>
			<div className={styles.storage_items}>
				{items.map((item, index) => (
					<div className={styles.storage_item} key={index}>
						{item}
					</div>
				))}
			</div>
		</section>
	);
}
