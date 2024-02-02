import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Background from './lib/components/background/Background';
import Nav from './lib/components/nav/Nav';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Stenkowa',
	description:
		'Twoja nowa, w pełni konfigurowalna strona startowa w przeglądarce.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body className={inter.className}>
				<Background />
				{children}
				<Nav />
			</body>
		</html>
	);
}
