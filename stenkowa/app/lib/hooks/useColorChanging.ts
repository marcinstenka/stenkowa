import { ChangeEvent, useEffect, useState } from 'react';

export default function useColorChanging(value: string) {
	let colorValue: string = '#0050b8';
	if (value) colorValue = value;
	const [color, setColor] = useState(colorValue);
	useEffect(() => {
		const colorChangingElements = document.querySelectorAll('[color-changing]');
		colorChangingElements.forEach((element) => {
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
