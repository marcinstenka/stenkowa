'use client';
import styles from './home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider() {
	return (
		<Swiper slidesPerView={1}>
			<SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
			<SwiperSlide className={styles.slide}>Slide 2</SwiperSlide>
			<SwiperSlide className={styles.slide}>Slide 3</SwiperSlide>
		</Swiper>
	);
}
