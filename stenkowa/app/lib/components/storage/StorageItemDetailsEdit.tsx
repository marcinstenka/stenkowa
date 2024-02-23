import { StorageItem } from "../../types/types";
import StorageItemEditForm from "./StorageItemEditForm";

export default function StorageItemDetailsEdit(){
    const tempItem:StorageItem= {
            id: 1,
			name: 'Zrobić pranie',
			color: '#0050b8',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			date_added: new Date(2023, 1, 12),
			user: 'Marcin',
		};

		return <StorageItemEditForm {...tempItem} />;
}