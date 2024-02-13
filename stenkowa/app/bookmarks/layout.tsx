import type { Metadata } from 'next';
import Main from '../lib/components/main/Main';
import Background from '../lib/components/background/Background';

const page = 'Storage';

export const metadata: Metadata = {
	title: `${page} | Stenkowa`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Background />
			<Main>{children}</Main>
		</>
	);
}
