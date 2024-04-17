import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.scss';
import Nav from './lib/components/nav/Nav';
import UserContextProvider from './lib/context/userContext';
const lato = Lato({
	weight: ['300', '400', '900'],
	subsets: ['latin'],
	display: 'swap',
});

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
				<UserContextProvider>
					{children}
					<Nav />
				</UserContextProvider>
			</body>
		</html>
	);
}
