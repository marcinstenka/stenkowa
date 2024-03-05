import ProfileForm from '../global/ProfileForm';
import Svg from './Svg';
import styles from './background.module.scss';

export default function Background() {
	const primary = 'rgba(0, 80, 184, 1)';

	return (
		<div className={styles.container}>
			<Svg primary={primary} />
			<div className={styles.form}>
				<ProfileForm />
			</div>
		</div>
	);
}
