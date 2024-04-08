'use client';
import styles from './global.module.scss';

import useProfileForm from '../../hooks/useProfileForm';
import { UserType } from '../../types/types';

type ProfileFormProps = {
	user: UserType;
};
export default function ProfileForm({ user }: ProfileFormProps) {
	const {
		handleuserNameChange,
		handleNewPasswordChange,
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

	return (
		<div className={styles.profile}>
			<h2>Dostosuj swój profil</h2>
			<div className={styles.profile_sections}>
				<section>
					<h3>Wybierz kolory:</h3>
					<form className={`${styles.form} ${styles.colors}`}>
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
					</form>
				</section>
				<section>
					<h3>Zmień dane:</h3>
					<form className={`${styles.form} ${styles.credentials}`}>
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
						/>
						<button>Zaaktualizuj</button>
					</form>
					<div className={styles.message}></div>
				</section>
			</div>
		</div>
	);
}
