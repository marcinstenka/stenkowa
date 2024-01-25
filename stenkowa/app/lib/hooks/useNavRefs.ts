import { usePathname } from 'next/navigation';
import { MutableRefObject, useEffect, useRef } from 'react';

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
					for (let j = 0; j < navItemsRefs.length; j++) {
						if (j != i) {
							const item = navItemsRefs[j];
							item.current && item.current.classList.remove(styles.active);
						}
					}
					currentItem.current.classList.add(styles.active);
				}
			}
		}

		window.addEventListener('resize', handleResize);

		for (let i = 0; i < navItemsRefs.length; i++) {
			const currentItem = navItemsRefs[i];
			if (indicator.current && currentItem.current) {
				if (currentItem.current.classList.contains(styles.active)) {
					indicator.current.style.transition = 'none';

					requestAnimationFrame(() => {
						if (indicator.current && currentItem.current)
							indicator.current.style.transform = `translateX(${currentItem.current.offsetLeft}px)`;

						requestAnimationFrame(() => {
							if (indicator.current)
								indicator.current.style.transition = 'all 0.3s ease 0s';
						});
					});
				}
			}
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
