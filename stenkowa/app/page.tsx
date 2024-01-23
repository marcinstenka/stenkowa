import Background from './lib/components/background/Background';
import styles from './page.module.scss';
import { CiSettings } from 'react-icons/ci';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.options}>
				<CiSettings />
			</div>
			<div className={styles.container}>
				<h2>Stenkowa</h2>
			</div>
		</main>
	);
}
