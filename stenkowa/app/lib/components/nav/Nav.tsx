'use client';
import styles from './nav.module.scss';
import { IoIosAdd } from 'react-icons/io';

import useNavRefs from '../../hooks/useNavRefs';
import useNavItems from '../../hooks/useNavItems';
import Link from 'next/link';

export default function Nav() {
	const { navItemsRefs, indicator } = useNavRefs({ styles });
	const { navItems } = useNavItems({navItemsRefs, styles});

	return (
		<nav className={styles.nav}>
			{navItems.map((navItem, index) => {
				return (
					<Link
						key={index}
						href={navItem.pathname}
						ref={navItem.ref}
						className={navItem.class}
					>
						<navItem.icon />
						<p>{navItem.text}</p>
					</Link>
				);
			})}
			<div ref={indicator} className={styles.indicator}></div>
			<div className={styles.button}>
				<IoIosAdd />
			</div>
		</nav>
	);
}
