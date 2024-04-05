import StorageItemDetailsEdit from '@/app/lib/components/storage/StorageItemDetailsEdit';

export default function Page({ params }: { params: { id: number } }) {
	return <StorageItemDetailsEdit id={params.id} />;
}
