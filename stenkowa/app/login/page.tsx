import { Metadata } from 'next';
import MainLogin from '../lib/components/main/MainLogin';
import BackgroundLogin from '../lib/components/background/BackgroundLogin';

const page = 'Login';

export const metadata: Metadata = {
	title: `${page} | Stenkowa`,
};

export default function Page() {
	return (
		<>
			<BackgroundLogin />
			<MainLogin page={`${page.toLowerCase()}`} />
		</>
	);
}
