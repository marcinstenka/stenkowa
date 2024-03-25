import { ChangeEvent, useEffect, useState } from 'react';
import { TodoType } from '../types/types';
import { calculateTimedifference } from '../functions/functions';

export default function useTodoEdit(todo: TodoType) {
	const [details_header, setDetails_header] = useState(todo.name);
	const [description, setDescription] = useState(todo.description);
	const [date_added, setDate_added] = useState(todo.date_added);
	const [date_deadline, setDate_deadline] = useState(todo.date_deadline);
	const [timeLeft, setTimeLeft] = useState(
		calculateTimedifference(todo.date_deadline)
	);

	// updaing time left live
	useEffect(() => {
		const new_date_deadline = new Date(date_deadline);
		console.log(todo.date_deadline.toISOString());
		console.log(todo.date_deadline);
		console.log(new Date());
		console.log(new Date().toISOString());
		setTimeLeft(calculateTimedifference(new_date_deadline));
	}, [date_deadline]);

	const handleHeaderChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDetails_header(e.target.value);
	};
	const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(e.target.value);
	};
	const handleDateAddedChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDate_added(new Date(e.target.value));
	};
	const handleDateDeadlineChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDate_deadline(new Date(e.target.value));
	};

	return {
		handleHeaderChange,
		handleDescriptionChange,
		handleDateAddedChange,
		handleDateDeadlineChange,
		details_header,
		description,
		date_added,
		date_deadline,
		timeLeft,
	};
}
