import Link from 'next/link';
import styles from './global.module.scss';
export default function StenkowaTitle() {
	return (
		<h2 className={styles.title}>
			<Link href='/'>Stenkowa</Link>
		</h2>
	);
}
