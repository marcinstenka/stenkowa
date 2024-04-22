import { ChangeEvent, useEffect, useState } from 'react';
import { TimeLeftType, TodoType } from '../types/types';
import { calculateTimeDifference } from '../functions/functions';
import { useStateManager } from 'react-select';

type UseTodoEditProps = TodoType;

type UseProfileFormReturn = {
	handleHeaderChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleDateAddedChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleDateDeadlineChange: (e: ChangeEvent<HTMLInputElement>) => void;
	details_header: string;
	description: string;
	date_added: Date;
	date_deadline: Date;
	timeLeft: TimeLeftType;
};

export default function useTodoEdit(todo: TodoType) {
	const [details_header, setDetails_header] = useState<string>(todo.name);
	const [description, setDescription] = useState<string>(todo.description);
	const [date_added, setDate_added] = useState<Date>(todo.date_added);
	const [date_deadline, setDate_deadline] = useState<Date>(todo.date_deadline);
	const [timeLeft, setTimeLeft] = useState<TimeLeftType>(
		calculateTimeDifference(todo.date_deadline, false)
	);

	// updaing time left live
	useEffect(() => {
		const new_date_deadline = new Date(date_deadline);
		setTimeLeft(calculateTimeDifference(new_date_deadline, false));
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
