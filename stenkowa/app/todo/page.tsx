import type { Metadata } from 'next';
import Main from '../lib/components/main/Main';

const page = "Todo"

export const metadata: Metadata = {
	title: `${page} | Stenkowa`,
};

export default function Todo() {
	return (
		<>
			<Main page={`${page.toLowerCase()}`} />
		</>
	);
}
