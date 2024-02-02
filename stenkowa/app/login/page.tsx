import { Metadata } from 'next';
import MainLogin from '../lib/components/main/MainLogin';

const page = 'Login';

export const metadata: Metadata = {
	title: `${page} | Stenkowa`,
};

export default function Page() {
	return <MainLogin page={`${page.toLowerCase()}`} />;
}
