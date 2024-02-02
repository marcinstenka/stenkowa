import type { Metadata } from 'next';
import Main from '../lib/components/main/Main';

const page = 'Bookmarks';

export const metadata: Metadata = {
	title: `${page} | Stenkowa`,
};

export default function Bookmarks() {
	return (
		<>
			<Main page={`${page.toLowerCase()}`} />
		</>
	);
}
