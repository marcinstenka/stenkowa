import { fetchStorageItem } from '../../functions/data';
import { StorageItemType } from '../../types/types';
import StorageItemEditForm from './StorageItemEditForm';
type StorageItemDetailsEditProps = {
	id: number;
};
export default async function StorageItemDetailsEdit({ id }: StorageItemDetailsEditProps) {
	const storageItem: StorageItemType | undefined = await fetchStorageItem(id);
	if (!storageItem) return;
	return <StorageItemEditForm {...storageItem} />;
}
