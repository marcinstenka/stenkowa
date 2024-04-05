import StorageItemDetails from '@/app/lib/components/storage/StorageItemDetails';

export default function Page({ params }: { params: { id: number } }) {

	return <StorageItemDetails id={params.id} key={params.id} />;
}
