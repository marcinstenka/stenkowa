import { ChangeEvent, useState } from 'react';
import { StorageItemType } from '../types/types';

type UseStorageItemEditProps = StorageItemType;
type UseStorageItemEditReturn = {
	handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	handleDateAddedChange: (e: ChangeEvent<HTMLInputElement>) => void;
	storageItemName: string;
	storageItemDescription: string;
	storageItemAdded: Date;
};

export default function useStorageItemEdit(
	item: UseStorageItemEditProps
): UseStorageItemEditReturn {
	const [storageItemName, setStorageItemName] = useState<string>(item.name);
	const [storageItemDescription, setStorageItemDescription] = useState<string>(
		item.description
	);
	const [storageItemAdded, setStorageItemAdded] = useState<Date>(
		item.insert_date
	);

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStorageItemName(e.target.value);
	};
	const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setStorageItemDescription(e.target.value);
	};
	const handleDateAddedChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStorageItemAdded(new Date(e.target.value));
	};

	return {
		handleNameChange,
		handleDescriptionChange,
		handleDateAddedChange,
		storageItemName,
		storageItemDescription,
		storageItemAdded,
	};
}
