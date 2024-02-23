import { ChangeEvent, useEffect, useState } from 'react';
import { StorageItem } from '../types/types';
import { calculateTimedifference } from '../functions/functions';

export default function useStorageItemEdit(item: StorageItem) {
	const [details_header, setDetails_header] = useState(item.name);
	const [details, setDetails] = useState(item.details);
	const [date_added, setDate_added] = useState(item.date_added);
	const [color, setColor] = useState(item.color);

	// changing color live
	useEffect(() => {
		const colorChangingElements = document.querySelectorAll('[color-changing]');
		colorChangingElements.forEach((element) => {
			element.setAttribute(
				'style',
				`${element.getAttribute('color-changing')}: ${color}`
			);
		});
	}, [color]);

	const handleHeaderChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDetails_header(e.target.value);
	};
	const handleDetailsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setDetails(e.target.value);
	};
	const handleDateAddedChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDate_added(new Date(e.target.value));
	};
	const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
		setColor(e.target.value);
	};

	return {
		handleHeaderChange,
		handleDetailsChange,
		handleDateAddedChange,
		handleColorChange,
		details_header,
		details,
		date_added,
		color,
	};
}
