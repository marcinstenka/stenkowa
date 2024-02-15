export default function (pathnames: string[], pathname: string) {
	let shouldRenderNav = false;
	let shouldRenderAddIcon = false;
	pathnames.forEach((name) => {
		if (pathname.includes(name)) {
			shouldRenderNav = true;
			if (!pathname.includes(`${name}/`)) {
				shouldRenderAddIcon = true;
			}
		}
	});
	return { shouldRenderNav, shouldRenderAddIcon };
}
