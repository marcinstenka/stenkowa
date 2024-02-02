import styles from './global.module.scss';
import { CiSettings } from 'react-icons/ci';

export default function Options() {
	return (
		<div className={styles.options}>
			<CiSettings />
		</div>
	);
}
