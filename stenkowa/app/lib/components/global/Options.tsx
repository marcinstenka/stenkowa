'use client';
import { useEffect, useState } from 'react';
import styles from './global.module.scss';
import { MdLogout } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';

import Link from 'next/link';

export default function Options() {
	const [isExpanded, setIsExpanded] = useState(false);
	useEffect(() => {
		const container = document.getElementById('container');
		const nav = document.getElementById('nav');
		const logout = document.getElementById('logout');
		const settings = document.getElementById('settings');
		if (isExpanded) {
			if (nav) nav.style.transform = 'translateY(300px)';
			if (container) container.style.transform = `translateY(575px)`;
			if (logout) logout.style.opacity = `1`;
			if (logout) logout.style.transition = `0.3s`;
			if (settings) settings.style.transform = `rotate(30deg)`;
		} else {
			if (nav) nav.style.transform = 'translateY(0) ';
			if (container) container.style.transform = 'translateY(0)';
			if (logout) logout.style.opacity = `0`;
			if (settings) settings.style.transform = `rotate(0)`;
		}
	}, [isExpanded]);
	const togglePadding = () => {
		setIsExpanded((prev) => !prev);
	};
	return (
		<div className={styles.options}>
			<Link href='/' className={styles.logout} id='logout'>
				<MdLogout />
			</Link>
			<IoSettingsOutline onClick={togglePadding} id='settings' />
		</div>
	);
}
