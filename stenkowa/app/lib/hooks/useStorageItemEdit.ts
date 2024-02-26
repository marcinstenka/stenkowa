import { ChangeEvent, useState } from 'react';
import { StorageItem } from '../types/types';

export default function useStorageItemEdit(item: StorageItem) {
	const [details_header, setDetails_header] = useState(item.name);
	const [details, setDetails] = useState(item.details);
	const [date_added, setDate_added] = useState(item.date_added);

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