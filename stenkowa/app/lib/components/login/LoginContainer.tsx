import styles from './login.module.scss';

import { CiLock } from 'react-icons/ci';
import { MdOutlineAccountCircle } from 'react-icons/md';

export default function LoginContainer() {
	return (
		<div className={styles.container}>
			<form className={styles.form}>
				<div className={styles.input}>
					<label htmlFor='userName'>Nazwa użytkownika</label>
					<MdOutlineAccountCircle />
					<input type='text' name='userName' />
				</div>

				<div className={styles.input}>
					<label htmlFor='password'>Hasło</label>
					<CiLock />
					<input type='password' name='password' />
				</div>
				<div className={styles.buttons}>
					<button className={styles.button}>Zaloguj</button>
					<div className={styles.line}></div>
					<button className={styles.button}>Zarejestruj</button>
				</div>
			</form>
		</div>
	);
}
