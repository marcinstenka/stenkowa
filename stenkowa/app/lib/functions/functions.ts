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

export function calculateTimedifference(added: Date, deadline: Date) {
	const differenceInMiliSec = Math.abs(added.getTime() - deadline.getTime());

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

export function formatDate(tempTodo: any) {
	const date_added = `${addZero(tempTodo.date_added.getDate())}.${addZero(
		tempTodo.date_added.getMonth()
	)}.${tempTodo.date_added.getFullYear()} | ${addZero(
		tempTodo.date_added.getHours()
	)}:${addZero(tempTodo.date_added.getMinutes())}`;
	const date_deadline = `${addZero(tempTodo.date_deadline.getDay())}.${addZero(
		tempTodo.date_deadline.getMonth()
	)}.${tempTodo.date_deadline.getFullYear()} | ${addZero(
		tempTodo.date_deadline.getHours()
	)}:${addZero(tempTodo.date_deadline.getMinutes())}`;
	return { date_added, date_deadline };
}
