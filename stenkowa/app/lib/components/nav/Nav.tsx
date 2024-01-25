'use client';
import styles from './nav.module.scss';
import { MdOutlineStorage } from 'react-icons/md';
import { RiTodoLine } from 'react-icons/ri';
import { TbTableShortcut } from 'react-icons/tb';
import { IoIosAdd } from 'react-icons/io';

import useNavRefs from '../../hooks/useNavRefs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Nav() {
	const pathname = usePathname();
	const paths = ['/storage', '/todo', '/bookmarks'];
	const { navItems, indicator } = useNavRefs({ styles });
	const test1 = clsx({
		[styles.nav_item]: true,
		[styles.active]: pathname === paths[0],
	});
	const test2 = clsx({
		[styles.nav_item]: true,
		[styles.active]: pathname === paths[1],
	});
	const test3 = clsx({
		[styles.nav_item]: true,
		[styles.active]: pathname === paths[2],
	});
	return (
		<nav className={styles.nav}>
			<Link href={paths[0]} ref={navItems[0]} className={test1}>
				<MdOutlineStorage />
				<p>Storage</p>
			</Link>
			<Link href={paths[1]} ref={navItems[1]} className={test2}>
				<RiTodoLine />
				<p>Todo</p>
			</Link>
			<Link href={paths[2]} ref={navItems[2]} className={test3}>
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
