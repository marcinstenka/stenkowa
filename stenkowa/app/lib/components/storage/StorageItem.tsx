import styles from './storage.module.scss';

type StorageItemProps = {
	item: string;
};
export default function StorageItem({ item }: StorageItemProps) {
	return <div className={styles.storage_item}>{item}</div>;
}
