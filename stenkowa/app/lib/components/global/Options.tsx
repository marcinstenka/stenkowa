'use client';
import { useEffect, useState } from 'react';
import styles from './global.module.scss';
import { MdLogout } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';

import Link from 'next/link';
import useIsExpanded from '../../hooks/useIsExpanded';

export default function Options() {
	const togglePadding = useIsExpanded()
	
	return (
		<div className={styles.options}>
			<Link href='/' className={styles.logout} id='logout'>
				<MdLogout />
			</Link>
			<IoSettingsOutline onClick={togglePadding} id='settings' />
		</div>
	);
}
