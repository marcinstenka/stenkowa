import { MutableRefObject, Ref, useEffect, useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { pathnames } from '../components/nav/nav-links';
import { pathnameToText } from '../functions/functions';
import { MdOutlineStorage } from 'react-icons/md';
import { RiTodoLine } from 'react-icons/ri';
import { TbTableShortcut } from 'react-icons/tb';
import { IconType } from 'react-icons';

type useNavItemsProps = {
	navItemsRefs: MutableRefObject<HTMLAnchorElement | null>[];
	styles: { readonly [key: string]: string };
};

type NavItem = {
	pathname: string;
	ref: Ref<HTMLAnchorElement>;
	class: string;
	text: string;
	icon: IconType;
};

export default function useNavItems({
	navItemsRefs,
	styles,
}: useNavItemsProps): NavItem[]|null {
	const [navItems, setNavItems] = useState<NavItem[] | null>(null);
	const pathname = usePathname();

	useEffect(() => {
		const newNavItems = pathnames.map((path, i) => {
			let icon;
			if (i == 0) icon = MdOutlineStorage;
			else if (i == 1) icon = RiTodoLine;
			else icon = TbTableShortcut;
			return {
				pathname: path,
				ref: navItemsRefs[i],
				class: clsx({
					[styles.nav_item]: true,
					[styles.active]: pathname.includes(path),
				}),
				text: pathnameToText(path),
				icon,
			};
		});
		setNavItems(newNavItems);
	}, [pathname]);
	if (!navItems) return null;
	return navItems;
}
