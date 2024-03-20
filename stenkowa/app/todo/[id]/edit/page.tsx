import TodoDetailsEdit from '@/app/lib/components/todo/TodoDetailsEdit';

export default function Page({ params }: { params: { id: number } }) {
	return <TodoDetailsEdit id={params.id} />;
}
