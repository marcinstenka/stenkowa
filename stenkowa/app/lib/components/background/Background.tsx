import { fetchUser } from '../../functions/data';
import ProfileForm from '../global/ProfileForm';
import Svg from './Svg';
import styles from './background.module.scss';

const USER_ID = 1; //For testing

export default async function Background() {
	const user = await fetchUser(USER_ID);
	if (!user) return null;
	return (
		<div className={styles.container}>
			<Svg primary={user.primary_color} />
			<div className={styles.form}>
				<ProfileForm user={user} />
			</div>
		</div>
	);
}
