import { StorageSectionType } from '../../types/types';
import StorageItem from './StorageItem';
import styles from './storage.module.scss';
import { getSectionDate } from '../../functions/functions';
type StorageSectionProps = {
	section: StorageSectionType;
};
export default function StorageSection({ section }: StorageSectionProps) {
	const date = getSectionDate(section);
	return (
		<section className={styles.storage_section}>
			<h3 className={styles.storage_date}>{date}</h3>
			<div className={styles.storage_items}>
				{section.items.map((item, index) => (
					<StorageItem {...item} key={index} />
				))}
			</div>
		</section>
	);
}
