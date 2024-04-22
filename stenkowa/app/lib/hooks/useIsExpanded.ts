import { useEffect, useState } from 'react';

const CONTAINER_SLIDE_DOWN = 685;
const NAV_SLIDE_DOWN = 300;
const SETTING_ICON_ROTATE = 30;

type UseIsExpandedReturn = () => void;

export default function useIsExpanded(): UseIsExpandedReturn {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	useEffect(() => {
		const container = document.getElementById('container');
		const nav = document.getElementById('nav');
		const logout = document.getElementById('logout');
		const settings = document.getElementById('settings');
		if (isExpanded) {
			if (nav) nav.style.transform = `translateY(${NAV_SLIDE_DOWN}px)`;
			if (container)
				container.style.transform = `translateY(${CONTAINER_SLIDE_DOWN}px)`;
			if (logout) {
				logout.style.opacity = `1`;
				logout.style.transition = `0.3s`;
			}
			if (settings)
				settings.style.transform = `rotate(${SETTING_ICON_ROTATE}deg)`;
		} else {
			if (nav) {
				window.innerWidth > 900
					? (nav.style.transform = 'translate(-50%, 0)')
					: (nav.style.transform = 'translateY(0)');
			}
			if (container) container.style.transform = 'translateY(0)';
			if (logout) logout.style.opacity = `0`;
			if (settings) settings.style.transform = `rotate(0)`;
		}
	}, [isExpanded]);

	const togglePadding = () => {
		setIsExpanded((prev: boolean) => !prev);
	};
	return togglePadding;
}
