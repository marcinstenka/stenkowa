import Todo from './Todo';
import styles from './todo.module.scss';
import { TodoType } from '../../types/types';
import { fetchTodos } from '../../functions/data';

export default async function TodoContainer() {
	// const todos: TodoType[] = [
	// 	{
	// 		id: 1,
	// 		color: '#CCCC00',
	// 		name: 'Po egzaminie pojechać do fryzjera, potem do sklepu po warzywa, a na koniec do piekarni po świeży chleb.',
	// 		details: '',
	// 		date_added: new Date(2024, 1, 20, 16, 31),
	// 		date_deadline: new Date(2024, 1, 21, 12, 0),
	// 	},
	// 	{
	// 		id: 2,
	// 		color: '#FFA500',
	// 		name: 'Wyjść z psem na spacer.',
	// 		details: '',
	// 		date_added: new Date(2024, 1, 20, 16, 31),
	// 		date_deadline: new Date(2024, 1, 21, 12, 0),
	// 	},
	// 	{
	// 		id: 3,
	// 		color: 'violet',
	// 		name: 'Pójść do babci.',
	// 		details: '',
	// 		date_added: new Date(2024, 1, 20, 16, 31),
	// 		date_deadline: new Date(2024, 1, 21, 12, 0),
	// 	},
	// ];
	const todos: TodoType[] | undefined = await fetchTodos();
	return (
		<div className={styles.container}>
			{todos &&
				todos.map((todo, index) => {
					return <Todo {...todo} key={index} />;
				})}
		</div>
	);
}
