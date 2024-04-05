export type StorageSectionType = {
	date?: string;
	items: StorageItemType[];
};
export type StorageItemType = {
	id: number;
	storage_id: number;
	color: string;
	name: string;
	description: string;
	insert_date: Date;
};
export type BookmarkType = {
	id: number;
	icon: string;
	link: string;
	color: string;
	name: string;
};
export type TodoType = {
	id: number;
	name: string;
	description: string;
	date_added: Date;
	date_deadline: Date;
	color: string;
};
export type UserType = {
	id: number;
	todos_container_id: number;
	storage_id: number;
	user_name: string;
	email: string;
	password: string;
	primary_color: string;
	secondary_color: string;
};
