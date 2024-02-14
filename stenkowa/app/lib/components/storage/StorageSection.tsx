import { StorageSectionType } from '../../types/types';
import StorageItem from './StorageItem';
import styles from './storage.module.scss';

type StorageSectionProps = {
	section: StorageSectionType;
};
export default function StorageSection({ section }: StorageSectionProps) {
	return (
		<section className={styles.storage_section}>
			<h3 className={styles.storage_date}>{section.date}</h3>
			<div className={styles.storage_items}>
				{section.items.map((item, index) => (
					<StorageItem id={item.id} color={item.color} text={item.text} key={index} />
				))}
			</div>
		</section>
	);
}
