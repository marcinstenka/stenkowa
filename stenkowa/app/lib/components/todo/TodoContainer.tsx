import Todo from './Todo';
import styles from './todo.module.scss';
import { TodoType } from '../../types/types';
import { fetchTodos } from '../../functions/data';

export default async function TodoContainer() {
	const todos: TodoType[] | undefined = await fetchTodos();
	if (!todos) return;
	return (
		<div className={styles.container}>
			{todos?.length > 0 ? (
				todos.map((todo, index) => {
					return <Todo {...todo} key={index} />;
				})
			) : (
				<h2 className={styles.no_results}>Brak zadań do zrobienia!</h2>
			)}
		</div>
	);
}
