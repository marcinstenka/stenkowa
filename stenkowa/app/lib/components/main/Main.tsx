import BookmarksContainer from '../bookmarks/BookmarksContainer';
import Options from '../global/Options';
import StenkowaTitle from '../global/StenkowaTitle';
import StorageContainer from '../storage/StorageContainer';
import TodoContainer from '../todo/TodoContainer';
import HomeContainer from '../home/HomeContainer';
import styles from './main.module.scss';

type MainProps = {
	page: string;
};

export default function Main({ page }: MainProps) {
	return (
		<main className={styles.main}>
			<Options />
			<div className={styles.container} id='container'>
				<StenkowaTitle />
				{page == 'todo' && <TodoContainer />}
				{page == 'storage' && <StorageContainer />}
				{page == 'bookmarks' && <BookmarksContainer />}
				{page == 'home' && <HomeContainer />}
			</div>
		</main>
	);
}
