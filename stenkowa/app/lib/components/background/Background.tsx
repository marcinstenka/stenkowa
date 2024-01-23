import styles from './background.module.scss';
export default function Background() {
	return (
		<svg
			className={styles.svg}
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			width='430'
			height='900'
			preserveAspectRatio='none'
			viewBox='0 0 430 900'
		>
			<g mask='url("#SvgjsMask1002")' fill='none'>
				<rect
					width='430'
					height='900'
					x='0'
					y='0'
					fill='url("#SvgjsRadialGradient1003")'
				></rect>
				<path d='M0 0L132.88 0L0 42.42z' fill='rgba(255, 255, 255, .1)'></path>
				<path
					d='M0 42.42L132.88 0L133.57999999999998 0L0 280.39z'
					fill='rgba(255, 255, 255, .075)'
				></path>
				<path
					d='M0 280.39L133.57999999999998 0L310.07 0L0 297.64z'
					fill='rgba(255, 255, 255, .05)'
				></path>
				<path
					d='M0 297.64L310.07 0L333.15999999999997 0L0 506.16999999999996z'
					fill='rgba(255, 255, 255, .025)'
				></path>
				<path
					d='M430 900L404.2 900L430 583.99z'
					fill='rgba(0, 0, 0, .1)'
				></path>
				<path
					d='M430 583.99L404.2 900L375.71 900L430 464.28000000000003z'
					fill='rgba(0, 0, 0, .075)'
				></path>
				<path
					d='M430 464.28000000000003L375.71 900L365.77 900L430 421.25z'
					fill='rgba(0, 0, 0, .05)'
				></path>
				<path
					d='M430 421.25L365.77 900L197.92999999999998 900L430 249.08z'
					fill='rgba(0, 0, 0, .025)'
				></path>
			</g>
			<defs>
				<mask id='SvgjsMask1002'>
					<rect width='430' height='900' fill='#ffffff'></rect>
				</mask>
				<radialGradient
					cx='50%'
					cy='50%'
					r='498.72'
					gradientUnits='userSpaceOnUse'
					id='SvgjsRadialGradient1003'
				>
					<stop stop-color='rgba(14, 42, 71, 1)' offset='0'></stop>
					<stop stop-color='rgba(0, 80, 184, 1)' offset='0'></stop>
				</radialGradient>
			</defs>
		</svg>
	);
}
