import { usePathname } from 'next/navigation';
import { MutableRefObject, Ref, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { pathnames } from '../components/nav/nav-links';
import { MdOutlineStorage } from 'react-icons/md';
import { RiTodoLine } from 'react-icons/ri';
import { TbTableShortcut } from 'react-icons/tb';
import clsx from 'clsx';

type useNavItemsProps = {
	navItemsRefs: MutableRefObject<HTMLAnchorElement | null>[];
	styles: { readonly [key: string]: string };
};

type useNavItemsReturn = {
	navItems: NavItem[];
};

type NavItem = {
	pathname: string;
	ref: Ref<HTMLAnchorElement>;
	class: string;
	text: string;
	icon: IconType;
};
function pathnameToText(text: string) {
	const withoutSlash = text.substring(1);
	const withoutFirstLetter = withoutSlash.substring(1);
	const firstLetter = withoutSlash.charAt(0).toUpperCase();
	return firstLetter + withoutFirstLetter;
}

export default function useNavItems({
	navItemsRefs,
	styles,
}: useNavItemsProps): useNavItemsReturn {
	const [navItems, setNavItems] = useState<NavItem[]>([]);
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

	return { navItems };
}
