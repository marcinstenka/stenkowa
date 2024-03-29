import Link from 'next/link';
import styles from './global.module.scss';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { MdDone } from 'react-icons/md';
type BackButtonsProps = {
	href: string;
	color: string;
};
export default function BackButtons(options: BackButtonsProps) {
	return (
		<div className={styles.back_buttons}>
			<Link
				className={styles.back_button}
				href={options.href}
				style={{ backgroundColor: options.color }}
			>
				<IoReturnDownBackOutline />
			</Link>
			<button
				className={styles.back_button}
				style={{ backgroundColor: options.color }}
				type='submit'
			>
				<MdDone />
			</button>
		</div>
	);
}
