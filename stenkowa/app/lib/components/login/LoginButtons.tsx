import Link from 'next/link';
import styles from './login.module.scss';

type LoginButtonsProps = {
	type: 'login' | 'sign-up';
};
export default function LoginButtons({ type }: LoginButtonsProps) {
	let first = { text: '', link: '' };
	let second = { text: '', link: '' };
	if (type == 'login') {
		first.text = 'Zaloguj';
		first.link = '/login';
		second.text = 'Zarejestruj';
		second.link = '/sign-up';
	} else if (type == 'sign-up') {
		first.text = 'Zarejestruj';
		first.link = '/sign-up';
		second.text = 'Zaloguj';
		second.link = '/login';
	}

	return (
		<div className={styles.buttons}>
			<button className={styles.button} type='submit'>
				<p>{first.text}</p>
			</button>
			<div className={styles.line}></div>
			<Link
				href={second.link}
				className={`${styles.button} ${styles.button_secondary}`}
			>
				{second.text}
			</Link>
		</div>
	);
}
