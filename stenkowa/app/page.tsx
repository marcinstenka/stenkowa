import Background from './lib/components/background/Background';
import HomeContainerLoggedOut from './lib/components/home/HomeContainerLoggedOut';
import HomeContainerLoggedIn from './lib/components/home/HomeContainerLoggedIn';
import Main from './lib/components/main/Main';

export default function Home() {
	const isLogged = false;
	return (
		<>
			<Background />
			<Main>
				{isLogged ? <HomeContainerLoggedIn /> : <HomeContainerLoggedOut />}
			</Main>
		</>
	);
}
