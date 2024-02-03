import { useEffect } from 'react';
import styles from '../components/storage/storage.module.scss';
import { StorageSectionType } from '../types/types';
export default function useStorageItemsOffsetTop(
	storage: StorageSectionType[]
) {
	useEffect(() => {
		const sections = document.querySelectorAll(`.${styles.storage_section}`);
		sections.forEach((section) => {
			let offsets: number[] = [];
			let offsetsLength = 0;
			let lastOffset = 0;
			const items = section.childNodes[1].childNodes;
			items.forEach((item) => {
				if (item instanceof HTMLElement) {
					if (!offsets.includes(item.offsetTop)) offsets.push(item.offsetTop);
				}
			});
			offsetsLength = offsets.length;
			lastOffset = offsets[offsetsLength - 1];

			items.forEach((item) => {
				if (item instanceof HTMLElement) {
					console.log(lastOffset);
					if (item.offsetTop != lastOffset) {
						item.style.flexGrow = '1';
					}
				}
			});
		});
	}, [storage]);
}
