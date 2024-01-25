import styles from './main.module.scss';
import { CiSettings } from 'react-icons/ci';

type MainProps = {
	page: string;
};

export default function Main({ page }: MainProps) {
	return (
		<main className={styles.main}>
			<div className={styles.options}>
				<CiSettings />
			</div>
			<div className={styles.container}>
				<h2>Stenkowa</h2>
				<p>hello {page}</p>
			</div>
		</main>
	);
}
