import { MutableRefObject, useEffect, useRef } from 'react';

type useNavRefProps = {
	styles: { readonly [key: string]: string };
};

type useNavRefReturn = {
	navItems: MutableRefObject<HTMLAnchorElement | null>[];
	indicator: MutableRefObject<HTMLDivElement | null>;
};

export default function useNavRefs({
	styles,
}: useNavRefProps): useNavRefReturn {
	const navItems: MutableRefObject<HTMLAnchorElement | null>[] = [
		useRef(null),
		useRef(null),
		useRef(null),
	];
	const indicator = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		function handleResize() {
			for (let i = 0; i < navItems.length; i++) {
				const currentItem = navItems[i];
				if (
					indicator.current &&
					currentItem.current &&
					currentItem.current.classList.contains(styles.active)
				) {
					indicator.current.style.transform = `translateX(${currentItem.current.offsetLeft}px)`;
				}
			}
		}
		function handleNavItemClick(
			currentItem: MutableRefObject<HTMLAnchorElement | null>,
			i: number
		) {
			if (indicator.current && currentItem.current) {
				indicator.current.style.transform = `translateX(${currentItem.current.offsetLeft}px)`;
				if (!currentItem.current.classList.contains(styles.active)) {
					for (let j = 0; j < navItems.length; j++) {
						if (j != i) {
							const item = navItems[j];
							item.current && item.current.classList.remove(styles.active);
						}
					}
					currentItem.current.classList.add(styles.active);
				}
			}
		}

		window.addEventListener('resize', handleResize);

		for (let i = 0; i < navItems.length; i++) {
			const currentItem = navItems[i];
			if (indicator.current && currentItem.current) {
				if (currentItem.current.classList.contains(styles.active)) {
					indicator.current.style.transform = `translateX(${currentItem.current.offsetLeft}px)`;
				}
			}
		}

		for (let i = 0; i < navItems.length; i++) {
			const currentItem = navItems[i];
			currentItem.current?.addEventListener('click', () =>
				handleNavItemClick(currentItem, i)
			);
		}

		() => {
			window.removeEventListener('resize', handleResize);
			for (let i = 0; i < navItems.length; i++) {
				const currentItem = navItems[i];
				currentItem.current?.removeEventListener('click', () =>
					handleNavItemClick(currentItem, i)
				);
			}
		};
	}, []);

	return { navItems, indicator };
}
