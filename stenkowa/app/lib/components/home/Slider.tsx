'use client';
import styles from './home.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BookmarkType, StorageSectionType, TodoType } from '../../types/types';
import Todo from '../todo/Todo';
import Bookmark from '../bookmarks/Bookmark';
import StorageSection from '../storage/StorageSection';
import useStorageItemsOffsetTop from '../../hooks/useStorageItemsOffsetTop';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';

export default function Slider() {
	const bookmarks: BookmarkType[] = [
		{
			link: 'https://www.netflix.com/browse',
			icon: 'SiNetflix',
			text: 'Netflix',
			color: '#E50914',
		},
		{
			link: 'https://mail.google.com/mail/u/0/',
			icon: 'SiGmail',
			text: 'Gmail',
			color: '#f2a60c',
		},
		{
			link: 'https://www.facebook.com',
			icon: 'FaFacebookF',
			text: 'Facebook',
			color: '#4267B2',
		},
		{
			link: 'https://www.youtube.com/',
			icon: 'FaYoutube',
			text: 'Youtube',
			color: '#FF0000',
		},
	];
	const todos: TodoType[] = [
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
	];

	const storage: StorageSectionType[] = [
		{
			date: 'styczeń 2023',
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
		{
			date: 'luty 2023',
			items: [
				{
					id: 4,
					name: 'Xbox One',
					color: 'var(--primary)',
					details: '',
					date_added: new Date(),
					user: 'Marcin',
				},
				{
					id: 5,
					name: 'Żelki',
					color: 'blue',
					details: '',
					date_added: new Date(),
					user: 'Marcin',
				},
			],
		},
	];
	useStorageItemsOffsetTop(storage);

	return (
		<div className={styles.slider}>
			<div className={styles.left}>
				<FaArrowCircleLeft />
			</div>
			<div className={styles.right}>
				<FaArrowCircleRight />
			</div>
			<Swiper
				modules={[Navigation]}
				slidesPerView={1}
				spaceBetween={15}
				loop
				navigation={{
					nextEl: `.${styles.right}`,
					prevEl: `.${styles.left}`,
				}}
			>
				<SwiperSlide>
					<div className={styles.slide}>
						<div className={styles.bookmarks}>
							{bookmarks.map((bookmark, index) => {
								return <Bookmark bookmark={bookmark} key={index} />;
							})}
						</div>
						<p className={styles.slide_text}>
							Tworzenie skrótów do stron internetowych
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.slide}>
						<div className={styles.todos}>
							{todos.map((todo, index) => {
								return <Todo {...todo} key={index} />;
							})}
						</div>
						<p className={styles.slide_text}>Tworzenie listy zadań</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.slide}>
						<div className={styles.storage}>
							{storage.map((section, index) => {
								return <StorageSection section={section} key={index} />;
							})}
						</div>
						<p className={styles.slide_text}>Zarządzanie magazynem</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
