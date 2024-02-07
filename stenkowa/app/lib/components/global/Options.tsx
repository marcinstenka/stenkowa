'use client';
import { useEffect, useState } from 'react';
import styles from './global.module.scss';
import { CiSettings } from 'react-icons/ci';

export default function Options() {
	const [isExpanded, setIsExpanded] = useState(false);
	useEffect(() => {
		const p = document.getElementById('test');
		if (isExpanded && p) {
			p.style.margin = '0 0 0 0';
		} else if (p) {
			p.style.margin = '-266px 0 0 0';
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
