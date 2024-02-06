'use client';
import styles from './home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Bookmark from '../bookmarks/Bookmark';
import { BookmarkType, TodoType } from '../../types/types';
import Todo from '../todo/Todo';

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
			color: '#CCCC00',
			text: 'Po egzaminie pojechać do fryzjera, potem do sklepu po warzywa, a na koniec do piekarni po świeży chleb.',
		},
		{
			color: '#FFA500',
			text: 'Wyjść z psem na spacer.',
		},
		{
			color: 'violet',
			text: 'Pójść do babci.',
		},
	];
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
								return <Todo todo={todo} key={index} />;
							})}
						</div>
						<p className={styles.slide_text}>Tworzenie listy zadań</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.slide}>3 </div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
