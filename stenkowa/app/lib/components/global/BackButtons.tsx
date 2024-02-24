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
				color-changing='background'
			>
				<IoReturnDownBackOutline />
			</Link>
			<Link
				className={styles.back_button}
				href={options.href}
				style={{ backgroundColor: options.color }}
				color-changing='background'
			>
				<MdDone />
			</Link>
		</div>
	);
}
