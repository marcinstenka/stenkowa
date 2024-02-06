import styles from './storage.module.scss';
import { StorageItem } from '../../types/types';
type StorageItemProps = {
	item: string;
};
export default function StorageItem({ color, text }: StorageItem) {
	return <div className={styles.storage_item} style={{borderColor: color}}>{text}</div>;
}
