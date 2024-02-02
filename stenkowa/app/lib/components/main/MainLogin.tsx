import StenkowaTitle from '../global/StenkowaTitle';
import LoginContainer from '../login/LoginContainer';
import styles from './mainLogin.module.scss';

type MainLoginProps = {
	page: string;
};

export default function Page({ page }: MainLoginProps) {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<StenkowaTitle />
				{page == 'login' && <LoginContainer />}
			</div>
		</main>
	);
}
