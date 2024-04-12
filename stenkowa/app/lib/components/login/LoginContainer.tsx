'use client';
import styles from './login.module.scss';

import { MdOutlineAccountCircle } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import LoginButtons from './LoginButtons';
import { authenticate } from '../../functions/actions';
import { useFormState } from 'react-dom';

export default function LoginContainer() {
	const initialState = { message: '' };
	const [state, dispatch] = useFormState(authenticate, initialState);
	return (
		<div className={styles.container} id='login'>
			<form action={dispatch} className={styles.form}>
				<div className={styles.input}>
					<input
						type='text'
						name='email'
						id='email'
						placeholder=' '
						required
						minLength={4}
						autoComplete='off'
					/>
					<label htmlFor='userName'>Email</label>
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
				<p className={styles.message}>{state?.message}</p>
			</form>
		</div>
	);
}
