import styles from './home.module.scss';
import Slider from './Slider';
import LoginButtons from '../login/LoginButtons';

export default function HomeContainer() {
	return (
		<div className={styles.container}>
			<h1>Witaj, użytkowniku</h1>
			<h4>
				Jesteś na Stenkowej Stronie, nowej, modyfikowalnej stronie startowej.
			</h4>
			<LoginButtons type='login' />
			<h3>Co umożliwia Stenkowa?</h3>
			<Slider />
			<p className={styles.text}>
				Dostosuj wygląd Stenkowej według własnego uznania - zmieniaj kolory i
				ikonki!
			</p>
			<div className={styles.colors}>
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
			<p className={styles.text}>
				Pamiętaj, aby ustawić Stenkową jako stronę startową w swojej ulubionej
				przeglądarce!
				<br />
				<br />
				<a href='https://github.com/marcinstenka/stenkowa-3.0'>Tutaj</a>{' '}
				znajdziesz poradnik jak to zrobić.
			</p>
		</div>
	);
}
