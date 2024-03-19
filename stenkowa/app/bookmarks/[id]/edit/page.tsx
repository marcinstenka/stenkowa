import BookmarkDetailsEdit from '@/app/lib/components/bookmarks/BookmarkDetailsEdit';

export default function Page({ params }: { params: { id: number } }) {
	return <BookmarkDetailsEdit id={params.id} />;
}
