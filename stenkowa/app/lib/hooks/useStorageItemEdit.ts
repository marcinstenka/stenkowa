import { ChangeEvent, useState } from 'react';
import { StorageItemType } from '../types/types';

type UseStorageItemEditProps = StorageItemType;
type UseStorageItemEditReturn = {
	handleHeaderChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleDetailsChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	handleDateAddedChange: (e: ChangeEvent<HTMLInputElement>) => void;
	details_header: string;
	details: string;
	date_added: Date;
};

export default function useStorageItemEdit(
	item: UseStorageItemEditProps
): UseStorageItemEditReturn {
	const [details_header, setDetails_header] = useState<string>(item.name);
	const [details, setDetails] = useState<string>(item.description);
	const [date_added, setDate_added] = useState<Date>(item.insert_date);

	const handleHeaderChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDetails_header(e.target.value);
	};
	const handleDetailsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setDetails(e.target.value);
	};
	const handleDateAddedChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDate_added(new Date(e.target.value));
	};

	return {
		handleHeaderChange,
		handleDetailsChange,
		handleDateAddedChange,
		details_header,
		details,
		date_added,
	};
}
