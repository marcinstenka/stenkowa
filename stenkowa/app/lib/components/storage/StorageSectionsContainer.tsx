'use client';
import { StorageSectionType } from '../../types/types';
import StorageSection from './StorageSection';
import useStorageItemsOffsetTop from '../../hooks/useStorageItemsOffsetTop';

type StorageSectionsContainerProps = {
	formattedStorage: StorageSectionType[];
};
export default function StorageSectionsContainer({
	formattedStorage,
}: StorageSectionsContainerProps) {
	useStorageItemsOffsetTop(formattedStorage);
	return (
		<>
			{formattedStorage.map((section, index) => {
				return <StorageSection section={section} key={index} />;
			})}
		</>
	);
}
