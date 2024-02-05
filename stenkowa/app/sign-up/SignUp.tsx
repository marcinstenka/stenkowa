export default function SignUp() {
	return (
		<>
			<BackgroundLogin />
			<MainLogin page={`${page.toLowerCase()}`} />
		</>
	);
}
