import TodoDetails from '@/app/lib/components/todo/TodoDetails';
export default function Page({ params }: { params: { id: number } }) {
	return <TodoDetails id={params.id} key={params.id} />;
}
