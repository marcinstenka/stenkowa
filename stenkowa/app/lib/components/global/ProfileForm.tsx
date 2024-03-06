import styles from './global.module.scss';

export default function ProfileForm() {
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
								value='#0050b8'
							/>
							<input
								className={styles.color}
								type='color'
								name='secondary'
								value='#ffffff'
							/>
						</div>
					</form>
				</section>
				<section>
					<h3>Zmień dane:</h3>
					<form className={`${styles.form} ${styles.credentials}`}>
						<input type='text' name='userName' />
						<input type='email' name='email' />
						<input type='password' name='password' />
						<button>Zaaktualizuj</button>
					</form>
					<div className={styles.message}></div>
				</section>
			</div>
		</div>
	);
}
