'use client';
import styles from './nav.module.scss';
import { MdOutlineStorage } from 'react-icons/md';
import { RiTodoLine } from 'react-icons/ri';
import { TbTableShortcut } from 'react-icons/tb';
import { IoIosAdd } from 'react-icons/io';

import useNavRefs from '../../hooks/useNavRefs';
import Link from 'next/link';

export default function Nav() {
	const { navItems, indicator } = useNavRefs({ styles });

	return (
		<nav className={styles.nav}>
			<Link
				href='/storage'
				ref={navItems[0]}
				className={`${styles.nav_item} ${styles.active}`}
			>
				<MdOutlineStorage />
				<p>Storage</p>
			</Link>
			<Link href='/todo' ref={navItems[1]} className={styles.nav_item}>
				<RiTodoLine />
				<p>Todo</p>
			</Link>
			<Link href='/bookmarks' ref={navItems[2]} className={styles.nav_item}>
				<TbTableShortcut />
				<p>Bookmarks</p>
			</Link>
			<div ref={indicator} className={styles.indicator}></div>
			<div className={styles.button}>
				<IoIosAdd />
			</div>
		</nav>
	);
}
