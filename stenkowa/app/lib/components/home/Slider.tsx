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
			id: 1,
			link: 'https://www.netflix.com/browse',
			icon: 'SiNetflix',
			name: 'Netflix',
			color: '#E50914',
		},
		{
			id: 2,
			link: 'https://mail.google.com/mail/u/0/',
			icon: 'SiGmail',
			name: 'Gmail',
			color: '#f2a60c',
		},
		{
			id: 3,
			link: 'https://www.facebook.com',
			icon: 'FaFacebook',
			name: 'Facebook',
			color: '#4267B2',
		},
		{
			id: 4,
			link: 'https://www.youtube.com/',
			icon: 'FaYoutube',
			name: 'Youtube',
			color: '#FF0000',
		},
	];
	const todos: TodoType[] = [
		{
			id: 1,
			color: '#CCCC00',
			name: 'Po egzaminie pojechać do fryzjera, potem do sklepu po warzywa, a na koniec do piekarni po świeży chleb.',
			description: '',
			date_added: new Date(2024, 1, 20, 16, 31),
			date_deadline: new Date(2024, 1, 21, 12, 0),
		},
		{
			id: 2,
			color: '#FFA500',
			name: 'Wyjść z psem na spacer.',
			description: '',
			date_added: new Date(2024, 1, 20, 16, 31),
			date_deadline: new Date(2024, 1, 21, 12, 0),
		},
		{
			id: 3,
			color: 'violet',
			name: 'Pójść do babci.',
			description: '',
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
					storage_id: 1,
					name: 'Krzesła',
					color: 'red',
					description: '',
					insert_date: new Date(),
				},
				{
					id: 2,
					storage_id: 1,
					name: 'Torby prezentowe',
					color: 'orange',
					description: '',
					insert_date: new Date(),
				},
				{
					id: 3,
					storage_id: 1,
					name: 'Toster',
					color: '#eb9605',
					description: '',
					insert_date: new Date(),
				},
			],
		},
		{
			date: 'luty 2023',
			items: [
				{
					id: 4,
					storage_id: 1,
					name: 'Xbox One',
					color: 'var(--primary)',
					description: '',
					insert_date: new Date(),
				},
				{
					id: 5,
					storage_id: 1,
					name: 'Żelki',
					color: 'blue',
					description: '',
					insert_date: new Date(),
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
								return (
									<Bookmark
										bookmark={bookmark}
										enableEdit={false}
										key={index}
									/>
								);
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
