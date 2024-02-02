import styles from './login.module.scss';
export default function LoginContainer() {
	return (
		<div className={styles.container}>
			<div className={styles.about}>
				<div className={styles.heading}>
					<h1>Witaj na</h1>
					<h1>Stenkowej Stronie</h1>
				</div>
				<p className={styles.text}>
					Twoja nowa, w pełni konfigurowalna strona startowa w przeglądarce.
					<br />
					<br />
					Personalizuj:
					<li>swoje skróty do innych stron</li>
					<li>listę zadań do zrobienia</li>
					<br />
					Twoja nowa, w pełni konfigurowalna strona startowa w przeglądarce.
				</p>
			</div>
		</div>
	);
}
