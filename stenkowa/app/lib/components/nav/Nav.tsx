import styles from './nav.module.scss';
import { MdOutlineStorage } from 'react-icons/md';
import { RiTodoLine } from 'react-icons/ri';
import { TbTableShortcut } from 'react-icons/tb';

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<div className={styles.nav_item}>
				<MdOutlineStorage />
				<p>Storage</p>
			</div>
			<div className={`${styles.nav_item} ${styles.active}`}>
				<RiTodoLine />
				<p>Todo</p>
			</div>
			<div className={styles.nav_item}>
				<TbTableShortcut />
				<p>Shortcuts</p>
			</div>
		</nav>
	);
}
