import styles from './home.module.scss';
import Todo from '../todo/Todo';
import Bookmark from '../bookmarks/Bookmark';
import StorageSection from '../storage/StorageSection';
import ProfileForm from '../global/ProfileForm';
import {
	fetchLatestBookmarks,
	fetchLatestStorageItems,
	fetchLatestTodos,
	fetchUser,
} from '../../functions/data';
import { transformStorageData } from '../../functions/functions';


const USER_ID = 1; //for testing
const TODOS_CONTAINER_ID = 1; //for testing
const STORAGE_ID = 1; //for testing

export default async function HomeContainerLoggedOut() {
	const user = await fetchUser(USER_ID);
	const todos = await fetchLatestTodos(TODOS_CONTAINER_ID);
	const storageItems = await fetchLatestStorageItems(STORAGE_ID);
	const bookmarks = await fetchLatestBookmarks(USER_ID);
	if (!todos || !storageItems || !bookmarks || !user) return;
	const formatedStorageItems = transformStorageData(storageItems);

	return (
		<div className={styles.container}>
			<h1>Witaj, {user.user_name}</h1>
			<div className={styles.content}>
				<section>
					<h3 className={styles.last_added}>Ostatnio dodane przedmioty:</h3>
					<div className={styles.storage_container}>
						{formatedStorageItems.length > 0 ? (
							<StorageSection
								section={formatedStorageItems[formatedStorageItems.length - 1]}
							/>
						) : (
							<p>Brak przedmiotów w schowku!</p>
						)}
					</div>
				</section>
				<section>
					<h3 className={styles.last_added}>Ostatnio dodane todo:</h3>
					<div className={styles.todo_container}>
						{todos.length > 0 ? (
							todos.map((todo, index) => {
								return <Todo {...todo} key={index} />;
							})
						) : (
							<p>Brak zadań do zrobienia!</p>
						)}
					</div>
				</section>

				<section>
					<h3 className={styles.last_added}>Ostatnio dodane zakładki:</h3>
					<div className={styles.bookmarks_container}>
						{bookmarks.length > 0 ? (
							bookmarks.map((bookmark, index) => {
								return (
									<Bookmark bookmark={bookmark} enableEdit={true} key={index} />
								);
							})
						) : (
							<p>Brak zakładek!</p>
						)}
					</div>
				</section>
			</div>
			<div className={styles.form}>
				<ProfileForm user={user} />
			</div>
		</div>
	);
}
