'use client';
import styles from './global.module.scss';

import useProfileForm from '../../hooks/useProfileForm';
import { UserType } from '../../types/types';
import { updateUser } from '../../functions/actions';
import { useFormState } from 'react-dom';

type ProfileFormProps = {
	user: UserType;
};
export default function ProfileForm({ user }: ProfileFormProps) {
	const {
		handleuserNameChange,
		handleNewPasswordChange,
		handlePasswordChange,
		handleEmailChange,
		handlePrimaryColorChange,
		handleSecondaryColorChange,
		userName,
		newPassword,
		password,
		email,
		primaryColor,
		secondaryColor,
	} = useProfileForm({ user });
	const initialState = { message: '' };
	const updateUserWithId = updateUser.bind(null, user.id);
	const [state, dispatch] = useFormState(updateUserWithId, initialState);

	return (
		<form className={styles.profile} action={dispatch}>
			<h2>Dostosuj swój profil</h2>
			<div className={styles.profile_sections}>
				<section>
					<h3>Wybierz kolory:</h3>
					<div className={`${styles.form} ${styles.colors}`}>
						<div className={styles.colors_container}>
							<input
								className={styles.color}
								type='color'
								name='primary'
								value={primaryColor}
								onChange={handlePrimaryColorChange}
							/>
							<input
								className={styles.color}
								type='color'
								name='secondary'
								value={secondaryColor}
								onChange={handleSecondaryColorChange}
							/>
						</div>
					</div>
				</section>
				<section>
					<h3>Zmień dane:</h3>
					<div className={`${styles.form} ${styles.credentials}`}>
						<input
							type='text'
							name='userName'
							value={userName}
							onChange={handleuserNameChange}
						/>
						<input
							type='email'
							name='email'
							value={email}
							onChange={handleEmailChange}
						/>
						<input
							type='password'
							name='new_password'
							value={newPassword}
							onChange={handleNewPasswordChange}
							placeholder='Wpisz nowe hasło'
						/>
						<input
							type='password'
							name='password'
							value={password}
							onChange={handlePasswordChange}
							placeholder='Potwierdź zmiany starym hasłem'
						/>
						<button>Zaaktualizuj</button>
					</div>
					<div className={styles.message}>{state?.message}</div>
				</section>
			</div>
		</form>
	);
}
