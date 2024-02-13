import Todo from './Todo';
import styles from './todo.module.scss';
import { TodoType } from '../../types/types';

export default function TodoContainer() {
	const todos: TodoType[] = [
		{
			id: 1,
			color: '#CCCC00',
			text: 'Po egzaminie pojechać do fryzjera, potem do sklepu po warzywa, a na koniec do piekarni po świeży chleb.',
		},
		{
			id: 2,
			color: '#FFA500',
			text: 'Wyjść z psem na spacer.',
		},
		{
			id: 3,
			color: 'violet',
			text: 'Pójść do babci.',
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
