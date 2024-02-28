import { StorageSectionType } from '../../types/types';
import StorageItem from './StorageItem';
import styles from './storage.module.scss';

type StorageSectionProps = {
	section: StorageSectionType;
};
export default function StorageSection({ section }: StorageSectionProps) {
	return (
		<section className={styles.storage_section}>
			{section.date && <h3 className={styles.storage_date}>{section.date}</h3>}
			<div className={styles.storage_items}>
				{section.items.map((item, index) => (
					<StorageItem {...item} key={index} />
				))}
			</div>
		</section>
	);
}
