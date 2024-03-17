'use client';
import Link from 'next/link';
import styles from './login.module.scss';

import { MdOutlineAccountCircle } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoMailOutline } from 'react-icons/io5';
import LoginButtons from './LoginButtons';
import { useFormState } from 'react-dom';
import { registerUser } from '../../functions/actions';

export default function LoginContainer() {
	const initialState = { message: null, errors: {} };
	const [state, dispatch] = useFormState(registerUser, initialState);

	return (
		<div className={styles.container}>
			<form className={styles.form} action={dispatch}>
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
				{state?.message && <p className={styles.message}>{state.message}</p>}
				<LoginButtons type='sign-up' />
			</form>
		</div>
	);
}
