import styles from './storage.module.scss';
import { StorageItemType } from '../../types/types';
import { fetchStorageItems } from '../../functions/data';
import { transformStorageData } from '../../functions/functions';
import StorageSectionsContainer from './StorageSectionsContainer';

export default async function StorageContainer() {
	const storage: StorageItemType[] | undefined = await fetchStorageItems();
	if (!storage) return;
	const formattedStorage = transformStorageData(storage);

	return (
		<div className={styles.container}>
			<StorageSectionsContainer formattedStorage={formattedStorage} />
		</div>
	);
}
