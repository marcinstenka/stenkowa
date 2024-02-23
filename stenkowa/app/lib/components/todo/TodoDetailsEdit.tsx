import TodoEditForm from './TodoEditForm';
import { TodoType } from '../../types/types';

export default function TodoDetailsEdit() {
	const tempTodo: TodoType = {
		id: 1,
		name: 'Zrób pranie',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Phasellus id mollis est. Integer euismod fermentum nunc ut dignissim. In nisl tellus, facilisis eu mi sed, bibendum gravida lectus. Quisque pulvinar tristique metus, ac eleifend magna consequat in.',
		date_added: new Date(2024, 1, 20, 16, 31),
		date_deadline: new Date(2024, 1, 21, 12, 0),
		color: '#0050b8',
	};

	return <TodoEditForm {...tempTodo} />;
}
