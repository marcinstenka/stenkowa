import { ChangeEvent, useState } from 'react';
import { StorageItemType } from '../types/types';

export default function useStorageItemEdit(item: StorageItemType) {
	const [details_header, setDetails_header] = useState(item.name);
	const [details, setDetails] = useState(item.description);
	const [date_added, setDate_added] = useState(item.insert_date);

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
