import { ChangeEvent, useEffect, useState } from 'react';
import { TodoType } from '../types/types';
import { calculateTimedifference } from '../functions/functions';

export default function useTodoEdit(todo: TodoType) {
	const [details_header, setDetails_header] = useState(todo.name);
	const [details, setDetails] = useState(todo.details);
	const [date_added, setDate_added] = useState(todo.date_added);
	const [date_deadline, setDate_deadline] = useState(todo.date_deadline);
	const [color, setColor] = useState(todo.color);
	const [timeLeft, setTimeLeft] = useState(
		calculateTimedifference(todo.date_added, todo.date_deadline)
	);

	// updaing time left live
	useEffect(() => {
		const new_date_added = new Date(date_added);
		const new_date_deadline = new Date(date_deadline);

		setTimeLeft(calculateTimedifference(new_date_added, new_date_deadline));
	}, [date_added, date_deadline]);

	// changing color live
	useEffect(() => {
		const colorChangingItems = document.querySelectorAll('[color-changing]');
		colorChangingItems.forEach((item) => {
			item.setAttribute(
				'style',
				`${item.getAttribute('color-changing')}: ${color}`
			);
		});
	}, [color]);

	const handleHeaderChange = (e: ChangeEvent<HTMLInputElement>) => {
		const length = e.target.value.length;

		setDetails_header(e.target.value);
	};
	const handleDetailsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setDetails(e.target.value);
	};
	const handleDateAddedChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDate_added(new Date(e.target.value));
	};
	const handleDateDeadlineChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDate_deadline(new Date(e.target.value));
	};
	const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
		setColor(e.target.value);
	};

	return {
		handleHeaderChange,
		handleDetailsChange,
		handleDateAddedChange,
		handleDateDeadlineChange,
		handleColorChange,
		details_header,
		details,
		date_added,
		date_deadline,
		color,
		timeLeft,
	};
}
