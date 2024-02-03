import Todo from './Todo';
import styles from './todo.module.scss';
import { TodoType } from '../../types/types';

export default function TodoContainer() {
	const todos: TodoType[] = [
		{
			color: 'var(--primary)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
		},
		{
			color: 'var(--primary)',
			text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
		},
	];

	return (
		<div className={styles.container}>
			{todos.map((todo, index) => {
				return <Todo todo={todo} key={index} />;
			})}
		</div>
	);
}
