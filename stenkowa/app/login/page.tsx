import { Metadata } from 'next';
import styles from './page.module.scss';
import Options from '../lib/components/global/Options';
import StenkowaTitle from '../lib/components/global/StenkowaTitle';

export const metadata: Metadata = {
	title: `Login | Stenkowa`,
};

export default function Page() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<StenkowaTitle />
			</div>
		</main>
	);
}
