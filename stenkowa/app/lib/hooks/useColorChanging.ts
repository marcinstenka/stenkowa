import { ChangeEvent, useEffect, useState } from 'react';

export default function useColorChanging(value: string = '#0050b8') {
	const [color, setColor] = useState<string>(value);

	useEffect(() => {
		const colorChangingElements: NodeListOf<Element> =
			document.querySelectorAll('[color-changing]');

		colorChangingElements.forEach((element: Element) => {
			element.setAttribute(
				'style',
				`${element.getAttribute('color-changing')}: ${color}`
			);
		});
	}, [color]);
	
	const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
		setColor(e.target.value);
	};
	return { color, handleColorChange };
}
