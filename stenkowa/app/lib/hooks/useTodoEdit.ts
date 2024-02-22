import { ChangeEvent, useEffect, useState } from "react";
import { TodoType } from "../types/types";
import { calculateTimedifference } from "../functions/functions";

export default function useTodoEdit(todo: TodoType) {
	const [details_header, setDetails_header] = useState(todo.name);
	const [details, setDetails] = useState(todo.details);
	const [date_added, setDate_added] = useState(todo.date_added);
	const [date_deadline, setDate_deadline] = useState(todo.date_deadline);
	const [timeLeft, setTimeLeft] = useState(
		calculateTimedifference(todo.date_added, todo.date_deadline)
	);
	useEffect(() => {
		const new_date_added = new Date(date_added);
		const new_date_deadline = new Date(date_deadline);

		setTimeLeft(calculateTimedifference(new_date_added, new_date_deadline));
	}, [date_added, date_deadline]);

	const handleHeaderChange = (e: ChangeEvent<HTMLInputElement>) => {
		const length = e.target.value.length;
		if (length > 30 || length < 1) {
			return;
		}
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

	return {
		handleHeaderChange,
		handleDetailsChange,
		handleDateAddedChange,
		handleDateDeadlineChange,
		details_header,
		details,
		date_added,
		date_deadline,
		timeLeft,
	};
}