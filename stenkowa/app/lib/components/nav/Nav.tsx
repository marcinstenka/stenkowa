'use client';
import styles from './nav.module.scss';
import { MdOutlineStorage } from 'react-icons/md';
import { RiTodoLine } from 'react-icons/ri';
import { TbTableShortcut } from 'react-icons/tb';
import useNavRefs from '../../hooks/useNavRefs';

export default function Nav() {
	const { navItems, indicator } = useNavRefs({styles});

	return (
		<nav className={styles.nav}>
			<div ref={navItems[0]} className={`${styles.nav_item} ${styles.active}`}>
				<MdOutlineStorage />
				<p>Storage</p>
			</div>
			<div ref={navItems[1]} className={styles.nav_item}>
				<RiTodoLine />
				<p>Todo</p>
			</div>
			<div ref={navItems[2]} className={styles.nav_item}>
				<TbTableShortcut />
				<p>Shortcuts</p>
			</div>
			<div ref={indicator} className={styles.indicator}></div>
		</nav>
	);
}
