'use client';
import styles from './global.module.scss';
import { MdLogout } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';

import useIsExpanded from '../../hooks/useIsExpanded';
import { logout } from '../../functions/actions';

export default function Options() {
	const togglePadding = useIsExpanded();

	return (
		<div className={styles.options}>
			<form action={logout}>
				<button className={styles.logout} id='logout'>
					<MdLogout />
				</button>
			</form>
			<IoSettingsOutline onClick={togglePadding} id='settings' />
		</div>
	);
}
