function addZero(number: number) {
	if (number < 10) {
		return `0${number.toString()}`;
	}
	return number.toString();
}
function dateInflection(days: number, hours: number, minutes: number) {
	const wordInflection = {
		days: {
			one: 'dzień',
			moreThanOne: 'dni',
		},
		hours: {
			one: 'godzina',
			twoToFour: 'godziny',
			moreThanFour: 'godzin',
		},
		minutes: {
			one: 'minuta',
			twoToFour: 'minuty',
			moreThanFour: 'minut',
		},
	};
	let dayWordInflection = '';
	let hourWordInflection = '';
	let minuteWordInflection = '';
	if (days == 1) dayWordInflection = wordInflection.days.one;
	else if (days > 1) dayWordInflection = wordInflection.days.moreThanOne;

	if (hours == 1) hourWordInflection = wordInflection.hours.one;
	else if (hours > 1 && hours < 5)
		hourWordInflection = wordInflection.hours.twoToFour;
	else if (hours > 1) hourWordInflection = wordInflection.hours.moreThanFour;

	if (minutes == 1) minuteWordInflection = wordInflection.minutes.one;
	else if (minutes > 1 && minutes < 5)
		minuteWordInflection = wordInflection.minutes.twoToFour;
	else if (minutes > 4)
		minuteWordInflection = wordInflection.minutes.moreThanFour;
	return [dayWordInflection, hourWordInflection, minuteWordInflection];
}

export function calculateTimedifference( deadline: Date) {
	const current = new Date(); 
	if (deadline < current) return '0';
	const differenceInMiliSec = Math.abs(current.getTime() - deadline.getTime());
	const days = Math.floor(differenceInMiliSec / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(differenceInMiliSec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor(
		(differenceInMiliSec % (1000 * 60 * 60)) / (1000 * 60)
	);

	const [dayWordInflection, hourWordInflection, minuteWordInflection] =
		dateInflection(days, hours, minutes);

	const formattedParts: string[] = [];
	days > 0 && formattedParts.push(`${days} ${dayWordInflection}`);
	hours > 0 && formattedParts.push(`${hours} ${hourWordInflection}`);
	minutes > 0 && formattedParts.push(`${minutes} ${minuteWordInflection}`);

	const formattedTime = formattedParts.join(', ');
	return formattedTime;
}

export function formatDate(date: Date, full: boolean) {
	let formatteDate = '';
	if (full) {
		formatteDate = `${addZero(date.getDate())}.${addZero(
			date.getMonth()
		)}.${date.getFullYear()} | ${addZero(date.getHours())}:${addZero(
			date.getMinutes()
		)}`;
	} else {
		formatteDate = `${addZero(date.getDate())}.${addZero(
			date.getMonth()
		)}.${date.getFullYear()}`;
	}

	return formatteDate;
}

export default function renderNav(
	pathnames: string[],
	pathname: string,
	loggedIn: boolean
) {
	let shouldRenderNav = false;
	let shouldRenderAddIcon = false;
	pathnames.forEach((name) => {
		if (pathname.includes(name)) {
			shouldRenderNav = true;
			if (!pathname.includes(`${name}/`)) {
				shouldRenderAddIcon = true;
			}
		}
		if (pathname == '/' && loggedIn) shouldRenderNav = true;
	});
	return { shouldRenderNav, shouldRenderAddIcon };
}
