import Link from 'next/link';
import styles from './login.module.scss';

import { MdOutlineAccountCircle } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoMailOutline } from 'react-icons/io5';

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
						type='email'
						name='email'
						id='email'
						placeholder=' '
						required
						minLength={6}
						autoComplete='off'
					/>
					<label htmlFor='email'>Email</label>
					<IoMailOutline />
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
				<div className={styles.buttons}>
					<button className={styles.button}>Zarejestruj</button>
					<div className={styles.line}></div>
					<Link
						href='/login'
						className={`${styles.button} ${styles.button_secondary}`}
					>
						Zaloguj
					</Link>
				</div>
			</form>
		</div>
	);
}
