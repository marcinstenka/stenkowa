import Svg from './Svg';
import styles from './background.module.scss';
export default function Background() {
	const primary = 'rgba(0, 80, 184, 1)';

	return (
		<div className={styles.container}>
			<Svg primary={primary} />
			<div className={styles.profile}>
				<h2>Dostosuj swój profil</h2>
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

					<button>Zaaktualizuj</button>
				</form>
				<h3>Zmień dane:</h3>
				<form className={`${styles.form} ${styles.credentials}`}>
					<input type='text' name='userName' />
					<input type='email' name='email' />
					<input type='password' name='password' />
					<button>Zaaktualizuj</button>
				</form>
				<div className={styles.message}></div>
			</div>
		</div>
	);
}
