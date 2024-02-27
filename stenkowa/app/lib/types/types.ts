export type StorageSectionType = {
	date: string;
	items: StorageItem[];
};
export type StorageItem = {
	id: number;
	color: string;
	name: string;
	details: string;
	date_added: Date;
	user: string;
};
export type BookmarkType = {
	id:number;
	icon: string;
	link: string;
	color: string;
	text: string;
};
export type TodoType = {
	id: number;
	name: string;
	details: string;
	date_added: Date;
	date_deadline: Date;
	color: string;
};
