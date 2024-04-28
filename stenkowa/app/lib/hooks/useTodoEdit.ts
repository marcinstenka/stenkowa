import { ChangeEvent, useEffect, useState } from 'react';
import { TimeLeftType, TodoType } from '../types/types';
import { calculateTimeDifference } from '../functions/functions';
import { useStateManager } from 'react-select';

type UseTodoEditProps = TodoType;

type UseProfileFormReturn = {
	handleHeaderChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	handleDateAddedChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleDateDeadlineChange: (e: ChangeEvent<HTMLInputElement>) => void;
	todoName: string;
	todoDescription: string;
	todoAdded: Date;
	todoDeadline: Date;
	timeLeft: TimeLeftType;
};

export default function useTodoEdit(todo: UseTodoEditProps): UseProfileFormReturn {
	const [todoName, setTodoName] = useState<string>(todo.name);
	const [todoDescription, setTodoDescription] = useState<string>(
		todo.description
	);
	const [todoAdded, setTodoAdded] = useState<Date>(todo.date_added);
	const [todoDeadline, setTodoDeadline] = useState<Date>(todo.date_deadline);
	const [timeLeft, setTimeLeft] = useState<TimeLeftType>(
		calculateTimeDifference(todo.date_deadline, false)
	);

	// updaing time left live
	useEffect(() => {
		const new_date_deadline = new Date(todoDeadline);
		setTimeLeft(calculateTimeDifference(new_date_deadline, false));
	}, [todoDeadline]);

	const handleHeaderChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTodoName(e.target.value);
	};
	const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setTodoDescription(e.target.value);
	};
	const handleDateAddedChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTodoAdded(new Date(e.target.value));
	};
	const handleDateDeadlineChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTodoDeadline(new Date(e.target.value));
	};

	return {
		handleHeaderChange,
		handleDescriptionChange,
		handleDateAddedChange,
		handleDateDeadlineChange,
		todoName,
		todoDescription,
		todoAdded,
		todoDeadline,
		timeLeft,
	};
}
