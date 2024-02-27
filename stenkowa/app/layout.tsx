import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.scss';
import Nav from './lib/components/nav/Nav';
const lato = Lato({ weight: ['300', '900'], subsets: ['latin'] });

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
			<body className={lato.className}>
				{children}
				<Nav />
			</body>
		</html>
	);
}
