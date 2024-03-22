import { StorageItemType } from '../../types/types';
import StorageItemEditForm from './StorageItemEditForm';

export default function StorageItemDetailsEdit() {
	const tempItem: StorageItemType = {
		id: 1,
		storage_id: 1,
		name: 'Zrobić pranie',
		color: '#0050b8',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		insert_date: new Date(2023, 1, 12),
	};

	return <StorageItemEditForm {...tempItem} />;
}
