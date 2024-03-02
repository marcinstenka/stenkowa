import styles from './home.module.scss';
import { BookmarkType, StorageSectionType, TodoType } from '../../types/types';
import Todo from '../todo/Todo';
import Bookmark from '../bookmarks/Bookmark';
import StorageSection from '../storage/StorageSection';

type TempData = {
	user: string;
	todo: TodoType[];
	storage: StorageSectionType;
	bookmarks: BookmarkType[];
};
export default function HomeContainerLoggedOut() {
	const data: TempData = {
		user: 'Marcin',
		todo: [
			{
				id: 1,
				color: '#CCCC00',
				name: 'Po egzaminie pojechać do fryzjera, potem do sklepu po warzywa, a na koniec do piekarni po świeży chleb.',
				details: '',
				date_added: new Date(2024, 1, 20, 16, 31),
				date_deadline: new Date(2024, 1, 21, 12, 0),
			},
			{
				id: 2,
				color: '#FFA500',
				name: 'Wyjść z psem na spacer.',
				details: '',
				date_added: new Date(2024, 1, 20, 16, 31),
				date_deadline: new Date(2024, 1, 21, 12, 0),
			},
			{
				id: 3,
				color: 'violet',
				name: 'Pójść do babci.',
				details: '',
				date_added: new Date(2024, 1, 20, 16, 31),
				date_deadline: new Date(2024, 1, 21, 12, 0),
			},
		],
		storage: {
			items: [
				{
					id: 1,
					name: 'Krzesła',
					color: 'red',
					details: '',
					date_added: new Date(),
					user: 'Marcin',
				},
				{
					id: 2,
					name: 'Torby prezentowe',
					color: 'orange',
					details: '',
					date_added: new Date(),
					user: 'Marcin',
				},
				{
					id: 3,
					name: 'Toster',
					color: '#eb9605',
					details: '',
					date_added: new Date(),
					user: 'Marcin',
				},
			],
		},
		bookmarks: [
			{
				id: 1,
				link: 'https://www.netflix.com/browse',
				icon: 'SiNetflix',
				name: 'Netflix',
				color: '#E50914',
			},
			{
				id: 2,
				link: 'https://mail.google.com/mail/u/0/',
				icon: 'SiGmail',
				name: 'Gmail',
				color: '#f2a60c',
			},
			{
				id: 3,
				link: 'https://www.facebook.com',
				icon: 'FaFacebookF',
				name: 'Facebook',
				color: '#4267B2',
			},
		],
	};
	return (
		<div className={styles.container}>
			<h1>Witaj, {data.user}</h1>
			<section>
				<h3 className={styles.last_added}>Ostatnio dodane todo:</h3>
				<div className={styles.todo_container}>
					{data.todo.map((todo, index) => {
						return <Todo {...todo} key={index} />;
					})}
				</div>
			</section>
			<section>
				<h3 className={styles.last_added}>Ostatnio dodane przedmioty:</h3>
				<div className={styles.storage_container}>
					<StorageSection section={data.storage} />
				</div>
			</section>
			<section>
				<h3 className={styles.last_added}>Ostatnio dodane zakładki:</h3>
				<div className={styles.bookmarks_container}>
					{data.bookmarks.map((bookmark, index) => {
						return (
							<Bookmark bookmark={bookmark} enableEdit={true} key={index} />
						);
					})}
				</div>
			</section>
		</div>
	);
}