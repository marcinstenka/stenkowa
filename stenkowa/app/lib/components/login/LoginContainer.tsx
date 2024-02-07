import styles from './login.module.scss';

import { MdOutlineAccountCircle } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import LoginButtons from './LoginButtons';

export default function LoginContainer() {
	return (
		<div className={styles.container}>
			<form className={styles.form}>
				<div className={styles.input}>
					<input
						type='text'
						name='userName'
						id='userName'
						placeholder=' '
						required
						minLength={4}
						autoComplete='off'
					/>
					<label htmlFor='userName'>Nazwa użytkownika</label>
					<MdOutlineAccountCircle />
				</div>
				<div className={styles.input}>
					<input
						type='password'
						name='password'
						id='password'
						placeholder=' '
						required
						minLength={6}
						autoComplete='off'
					/>
					<label htmlFor='password'>Hasło</label>
					<RiLockPasswordLine />
				</div>
				<LoginButtons type='login' />
			</form>
		</div>
	);
}
