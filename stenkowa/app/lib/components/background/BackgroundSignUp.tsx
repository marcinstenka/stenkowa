import Svg from './Svg';
import styles from './background.module.scss';
export default function BackgroundLogin() {
	const primary = 'rgba(0, 80, 184, 1)';

	return (
		<div className={styles.container}>
			<Svg primary={primary} />
			<div className={styles.about}>
				<div className={styles.heading}>
					<h1>Witaj na</h1>
					<h1>Stenkowej Stronie</h1>
				</div>
				<p>
					Stwórz prywatne konto, loguj się na różnych urządzeniach i
					synchronizuj swoje dane.
				</p>

				<p>Nie zapomnij ustawić Stenkowej jako domyślnej strony startowej!</p>
			</div>
		</div>
	);
}
