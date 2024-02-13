import Background from './lib/components/background/Background';
import HomeContainer from './lib/components/home/HomeContainer';
import Main from './lib/components/main/Main';

export default function Home() {
	return (
		<>
			<Background />
			<Main>
				<HomeContainer />
			</Main>
		</>
	);
}
