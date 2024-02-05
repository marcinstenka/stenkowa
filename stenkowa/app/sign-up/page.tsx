import { Metadata } from 'next';
import MainLogin from '../lib/components/main/MainLogin';
import BackgroundSignUp from '../lib/components/background/BackgroundSignUp';

const page = 'Rejestracja';

export const metadata: Metadata = {
	title: `${page} | Stenkowa`,
};

export default function Page() {
	return (
		<>
			<BackgroundSignUp />
			<MainLogin page={`${page.toLowerCase()}`} />
		</>
	);
}
