import { StorageSectionType } from '../../types/types';
import StorageItem from './StorageItem';
import styles from './storage.module.scss';
import { switchMonthName } from '../../functions/functions';
type StorageSectionProps = {
	section: StorageSectionType;
};
export default function StorageSection({ section }: StorageSectionProps) {
	let year = '';
	let month = '';
	if (section.date) {
		year = section.date.split(' ')[0];
		month = switchMonthName(parseInt(section.date.split(' ')[1]));
	}
	const date = month + ' ' + year;
	return (
		<section className={styles.storage_section}>
			{section.date && <h3 className={styles.storage_date}>{date}</h3>}
			<div className={styles.storage_items}>
				{section.items.map((item, index) => (
					<StorageItem {...item} key={index} />
				))}
			</div>
		</section>
	);
}
