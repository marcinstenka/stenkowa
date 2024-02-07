'use client';
import { useEffect, useState } from 'react';
import styles from './global.module.scss';
import { CiSettings } from 'react-icons/ci';

export default function Options() {
	const [isExpanded, setIsExpanded] = useState(false);
	useEffect(() => {
		const container = document.getElementById('container');
		const nav = document.getElementById('nav');
		if (isExpanded) {
			if (nav) nav.style.transform = 'translateY(300px)';
			if (container) container.style.margin = '700px 0 0 0';
		} else {
			if (nav) nav.style.transform = 'translateY(0) ';
			if (container) container.style.margin = '0 0 0 0';
		}
	}, [isExpanded]);
	const togglePadding = () => {
		setIsExpanded((prev) => !prev);
	};
	return (
		<div className={styles.options} onClick={togglePadding}>
			<CiSettings />
		</div>
	);
}
