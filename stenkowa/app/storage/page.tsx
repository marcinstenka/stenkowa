import type { Metadata } from 'next';
import Main from '../lib/components/main/Main';

const page = 'Storage';

export const metadata: Metadata = {
	title: `${page} | Stenkowa`,
};

export default function Storage() {
	return (
		<>
			<Main page={`${page.toLowerCase()}`} />
		</>
	);
}
