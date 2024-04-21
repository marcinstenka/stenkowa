'use client';
import styles from './nav.module.scss';
import { IoIosAdd } from 'react-icons/io';

import useNavRefs from '../../hooks/useNavRefs';
import useNavItems from '../../hooks/useNavItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pathnames } from './nav-links';
import renderNav from '../../functions/functions';
export default function Nav() {
	const isLogged = true;
	const pathname = usePathname();
	const { navItemsRefs, indicator } = useNavRefs({ styles });
	const navItems = useNavItems({ navItemsRefs, styles });
	const { shouldRenderNav, shouldRenderAddIcon } = renderNav(
		pathnames,
		pathname,
		isLogged
	);

	if (!shouldRenderNav || !navItems) {
		return;
	}
	return (
		<nav className={styles.nav} id='nav'>
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
			{shouldRenderAddIcon && (
				<Link href={`${pathname}/create`} className={styles.button}>
					<IoIosAdd />
				</Link>
			)}
		</nav>
	);
}
