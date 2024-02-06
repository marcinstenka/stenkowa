import type { Metadata } from 'next';
import Background from '../lib/components/background/Background';
import Main from '../lib/components/main/Main';

const page = 'Bookmarks';

export const metadata: Metadata = {
	title: `${page} | Stenkowa`,
};

export default function Bookmarks() {
	return (
		<>
			<Background />
			<Main page={`${page.toLowerCase()}`} />
		</>
	);
}
