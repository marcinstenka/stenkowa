import TodoEditForm from './TodoEditForm';
import { TodoType } from '../../types/types';
import { fetchTodo } from '../../functions/data';
type TodoDetailsEditProps = {
	id: number;
};
export default async function TodoDetailsEdit({ id }: TodoDetailsEditProps) {
	const todo: TodoType | undefined = await fetchTodo(id);
	if (!todo) return;

	return <TodoEditForm {...todo} />;
}
