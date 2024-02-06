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
		</div>
	);
}
