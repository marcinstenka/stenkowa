import Options from '../global/Options';
import StenkowaTitle from '../global/StenkowaTitle';
import styles from './main.module.scss';

type MainProps = {
	children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
	return (
		<main className={styles.main}>
			<Options />
			<div className={styles.container} id='container'>
				<StenkowaTitle />
				{children}
			</div>
		</main>
	);
}
