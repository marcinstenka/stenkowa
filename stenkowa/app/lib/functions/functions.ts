import { MutableRefObject } from 'react';
import { StorageItemType, StorageSectionType } from '../types/types';
import moment from 'moment-timezone';

function addZero(number: number): string {
	if (number < 10) {
		return `0${number.toString()}`;
	}
	return number.toString();
}
function dateInflection(
	days: number,
	hours: number,
	minutes: number
): [string, string, string] {
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
	let dayWordInflection: string = '';
	let hourWordInflection: string = '';
	let minuteWordInflection: string = '';
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

export function calculateTimeDifference(
	deadline: Date,
	addTimeZone: boolean
): { isTimeExpired: boolean; formattedTime: string } {
	// the second argument exists because on todo details there's a server timezone equal to +0
	const current = new Date();
	const date = moment();
	const polandTimeZone = date.tz('Europe/Warsaw').toString();
	const howManyHoursToAdd = polandTimeZone.slice(-3).slice(0, 1);
	if (addTimeZone)
		current.setHours(current.getHours() + parseInt(howManyHoursToAdd));

	if (deadline < current) {
		return {
			isTimeExpired: true,
			formattedTime: 'Czas minął!',
		};
	}

	const differenceInMiliSec: number = Math.abs(
		current.getTime() - deadline.getTime()
	);
	const msInOneHour: number = 1000 * 60 * 60;
	const days: number = Math.floor(differenceInMiliSec / (msInOneHour * 24));
	const hours: number = Math.floor(
		(differenceInMiliSec % (msInOneHour * 24)) / msInOneHour
	);
	const minutes: number = Math.floor(
		(differenceInMiliSec % msInOneHour) / (1000 * 60)
	);

	const [dayWordInflection, hourWordInflection, minuteWordInflection] =
		dateInflection(days, hours, minutes);

	const formattedParts: string[] = [];
	days > 0 && formattedParts.push(`${days} ${dayWordInflection}`);
	hours > 0 && formattedParts.push(`${hours} ${hourWordInflection}`);
	minutes > 0 && formattedParts.push(`${minutes} ${minuteWordInflection}`);

	const formattedTime = formattedParts.join(', ');
	return {
		isTimeExpired: false,
		formattedTime: formattedTime,
	};
}

export function formatDate(date: Date, full: boolean): string {
	let formatteDate = '';
	if (full) {
		formatteDate = `${addZero(date.getDate())}.${addZero(
			date.getMonth() + 1
		)}.${date.getFullYear()} | ${addZero(date.getHours())}:${addZero(
			date.getMinutes()
		)}`;
	} else {
		formatteDate = `${addZero(date.getDate())}.${addZero(
			date.getMonth() + 1
		)}.${date.getFullYear()}`;
	}
	return formatteDate;
}

export default function renderNav(
	pathnames: string[],
	pathname: string,
	loggedIn: boolean
): { shouldRenderNav: boolean; shouldRenderAddIcon: boolean } {
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

export function transformStorageData(storage: StorageItemType[]): {
	date: string;
	items: any;
}[] {
	const storageSectionsMap = new Map<string, { date: string; items: any }>();

	storage.forEach((item) => {
		const monthYear = `${item.insert_date.getFullYear()} ${
			item.insert_date.getMonth() + 1
		}`;

		if (!storageSectionsMap.has(monthYear)) {
			storageSectionsMap.set(monthYear, {
				date: monthYear,
				items: [],
			});
		}

		const section = storageSectionsMap.get(monthYear);
		if (section) {
			section.items.push({
				id: item.id,
				name: item.name,
				color: item.color,
				description: item.description,
				insert_date: item.insert_date,
				storage_id: item.storage_id,
			});
		}
	});

	const sortedSections = Array.from(storageSectionsMap.values()).sort(
		(a, b) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);
			return dateA.getTime() - dateB.getTime();
		}
	);
	return sortedSections;
}
export function switchMonthName(monthNumber: number) {
	switch (monthNumber) {
		case 1:
			return 'Styczeń';
		case 2:
			return 'Luty';
		case 3:
			return 'Marzec';
		case 4:
			return 'Kwiecień';
		case 5:
			return 'Maj';
		case 6:
			return 'Czerwiec';
		case 7:
			return 'Lipiec';
		case 8:
			return 'Sierpień';
		case 9:
			return 'Wrzesień';
		case 10:
			return 'Październik';
		case 11:
			return 'Listopad';
		case 12:
			return 'Grudzień';
		default:
			return 'Nie prawidłowa wartość miesiąca';
	}
}
export function getSectionDate(section: StorageSectionType): string {
	let year = '';
	let month = '';
	if (section.date) {
		year = section.date.split(' ')[0];
		month = switchMonthName(parseInt(section.date.split(' ')[1]));
	}
	return month + ' ' + year;
}
export function pathnameToText(text: string): string {
	const withoutSlash = text.substring(1);
	const withoutFirstLetter = withoutSlash.substring(1);
	const firstLetter = withoutSlash.charAt(0).toUpperCase();
	return firstLetter + withoutFirstLetter;
}

export function checkIndicatorBorderRadius(
	navItemsRefs: MutableRefObject<HTMLAnchorElement | null>[],
	currentItem: MutableRefObject<HTMLAnchorElement | null>,
	indicator: MutableRefObject<HTMLDivElement | null>
): void {
	if (window.innerWidth > 900) {
		if (currentItem.current && indicator.current) {
			if (currentItem == navItemsRefs[0]) {
				indicator.current.style.borderRadius = '25px 0 0 0';
			} else if (currentItem == navItemsRefs[2]) {
				indicator.current.style.borderRadius = '0 25px 0 0';
			} else {
				indicator.current.style.borderRadius = '0';
			}
		}
	} else {
		if (indicator.current) {
			indicator.current.style.borderRadius = '0';
		}
	}
}
