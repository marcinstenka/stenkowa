import TodoEditForm from './TodoEditForm';
import { fetchTodo } from '../../functions/data';
import { TodoType } from '../../types/types';

type TodoDetailsEditProps = {
	id: number;
};

export default async function TodoDetailsEdit({ id }: TodoDetailsEditProps) {
	const todo: TodoType | undefined = await fetchTodo(id);
	if (!todo) return;

	return <TodoEditForm {...todo} />;
}
