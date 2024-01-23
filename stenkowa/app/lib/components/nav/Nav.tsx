'use client';
import { MutableRefObject, useEffect, useRef } from 'react';
import styles from './nav.module.scss';
import { MdOutlineStorage } from 'react-icons/md';
import { RiTodoLine } from 'react-icons/ri';
import { TbTableShortcut } from 'react-icons/tb';

export default function Nav() {
	const navItems: MutableRefObject<HTMLDivElement | null>[] = [
		useRef(null),
		useRef(null),
		useRef(null),
	];
	const active = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		for (let i = 0; i < navItems.length; i++) {
			const currentItem = navItems[i];
			currentItem.current?.addEventListener('click', () => {
				if (active.current && currentItem.current) {
					active.current.style.left = `${currentItem.current.offsetLeft}px`;
				}
			});
		}
	}, []);

	return (
		<nav className={styles.nav}>
			<div ref={navItems[0]} className={styles.nav_item}>
				<MdOutlineStorage />
				<p>Storage</p>
			</div>
			<div ref={navItems[1]} className={`${styles.nav_item} `}>
				<RiTodoLine />
				<p>Todo</p>
			</div>
			<div ref={navItems[2]} className={styles.nav_item}>
				<TbTableShortcut />
				<p>Shortcuts</p>
			</div>
			<div ref={active} className={`${styles.active} ${styles.start}  `}></div>
		</nav>
	);
}
