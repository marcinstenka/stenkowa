import { usePathname } from 'next/navigation';
import { MutableRefObject, useEffect, useRef } from 'react';
import { checkIndicatorBorderRadius } from '../functions/functions';

type useNavRefProps = {
	styles: { readonly [key: string]: string };
};

type useNavRefReturn = {
	navItemsRefs: MutableRefObject<HTMLAnchorElement | null>[];
	indicator: MutableRefObject<HTMLDivElement | null>;
};

export default function useNavRefs({
	styles,
}: useNavRefProps): useNavRefReturn {
	const navItemsRefs: MutableRefObject<HTMLAnchorElement | null>[] = [
		useRef(null),
		useRef(null),
		useRef(null),
	];
	const indicator = useRef<HTMLDivElement | null>(null);
	const pathname = usePathname();

	useEffect(() => {
		function handleResize() {
			for (let i = 0; i < navItemsRefs.length; i++) {
				const currentItem = navItemsRefs[i];
				if (
					indicator.current &&
					currentItem.current &&
					currentItem.current.classList.contains(styles.active)
				) {
					indicator.current.style.transform = `translateX(${currentItem.current.offsetLeft}px)`;
					checkIndicatorBorderRadius(navItemsRefs, currentItem, indicator);
				}
			}
			// handling position of nav when resizing window and expanded on mobile (related to useIsExpanded hook)
			const nav = document.getElementById('nav');
			if (nav) {
				window.innerWidth > 900
					? (nav.style.transform = 'translate(-50%, 0)')
					: (nav.style.transform = 'translateY(0) ');
			}
		}
		function handleNavItemClick(
			currentItem: MutableRefObject<HTMLAnchorElement | null>,
			i: number
		) {
			if (indicator.current && currentItem.current) {
				indicator.current.style.transform = `translateX(${currentItem.current.offsetLeft}px)`;
				if (!currentItem.current.classList.contains(styles.active)) {
					for (let j = 0; j < navItemsRefs.length; j++) {
						if (j != i) {
							const item = navItemsRefs[j];
							item.current && item.current.classList.remove(styles.active);
						}
					}
					checkIndicatorBorderRadius(navItemsRefs, currentItem, indicator);

					currentItem.current.classList.add(styles.active);
				}
			}
		}
		window.addEventListener('resize', handleResize);

		let activeExist = false;
		// moving indicator to .active nav_link
		for (let i = 0; i < navItemsRefs.length; i++) {
			const currentItem = navItemsRefs[i];
			if (indicator.current && currentItem.current) {
				if (currentItem.current.classList.contains(styles.active)) {
					indicator.current.style.transform = `translateX(${currentItem.current.offsetLeft}px)`;
					indicator.current.style.opacity = '1';

					checkIndicatorBorderRadius(navItemsRefs, currentItem, indicator);
					activeExist = true;
				}
			}
		}
		// "from / to e.g. /todo and then going back to /" case - setting position out of view
		if (!activeExist && indicator.current) {
			indicator.current.style.transform = `translate(-50%, 100%)`;
			indicator.current.style.opacity = '0';
		}

		for (let i = 0; i < navItemsRefs.length; i++) {
			const currentItem = navItemsRefs[i];

			currentItem.current?.addEventListener('click', () =>
				handleNavItemClick(currentItem, i)
			);
		}

		() => {
			window.removeEventListener('resize', handleResize);
			for (let i = 0; i < navItemsRefs.length; i++) {
				const currentItem = navItemsRefs[i];
				currentItem.current?.removeEventListener('click', () =>
					handleNavItemClick(currentItem, i)
				);
			}
		};
	}, [navItemsRefs]);

	//indicator moving when clicking "back button"
	useEffect(() => {
		for (let i = 0; i < navItemsRefs.length; i++) {
			if (indicator.current) indicator.current.style.display = 'block';
			const currentItem = navItemsRefs[i];
			if (indicator.current && currentItem.current) {
				if (currentItem.current.classList.contains(styles.active)) {
					indicator.current.style.transform = `translateX(${currentItem.current.offsetLeft}px)`;
				}
			}
		}
	}, [pathname]);

	return { navItemsRefs, indicator };
}

