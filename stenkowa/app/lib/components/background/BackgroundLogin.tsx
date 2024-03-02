import Svg from './Svg';
import styles from './background.module.scss';
export default function BackgroundLogin() {
	const primary = 'rgba(0, 80, 184, 1)';

	return (
		<div className={styles.container}>
			<Svg primary={primary} height='60vh' />
			<div className={styles.about}>
				<div className={styles.heading}>
					<h1>Witaj na</h1>
					<h1>Stenkowej Stronie</h1>
				</div>
				<p>
					Twoja nowa, w pełni konfigurowalna strona startowa w przeglądarce.
				</p>
				Personalizuj:
				<ul>
					<li>swoje skróty do innych stron</li>
					<li>listę zadań do zrobienia</li>
				</ul>
				<p>Stwórz miejsce do zarządzania swoimi przedmiotami.</p>
			</div>
		</div>
	);
}
