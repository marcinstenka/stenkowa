import Todo from './Todo';
import styles from './todo.module.scss';
import { TodoType } from '../../types/types';
import { fetchTodos } from '../../functions/data';

export default async function TodoContainer() {
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
