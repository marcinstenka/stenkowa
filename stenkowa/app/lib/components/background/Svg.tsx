import styles from './background.module.scss';
type SvgProps = {
	primary: string;
	height: string;
};
export default function Svg({ primary, height }: SvgProps) {
	return (
		<svg
			className={styles.svg}
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			width='430'
			height={height}
			preserveAspectRatio='none'
			viewBox='0 0 430 900'
		>
			<g mask='url("#SvgjsMask1110")' fill='none'>
				<rect
					width='430'
					height='900'
					x='0'
					y='0'
					fill='url("#SvgjsLinearGradient1111")'
				></rect>
				<path d='M0 0L65.17 0L0 377.39z' fill='rgba(255, 255, 255, .1)'></path>
				<path
					d='M0 377.39L65.17 0L152.37 0L0 444.33z'
					fill='rgba(255, 255, 255, .08)'
				></path>
				<path
					d='M0 444.33L152.37 0L316.99 0L0 501.51z'
					fill='rgba(255, 255, 255, .055)'
				></path>
				<path
					d='M0 501.51L316.99 0L383.63 0L0 502.05z'
					fill='rgba(255, 255, 255, .025)'
				></path>
				<path
					d='M430 900L263.52 900L430 553.77z'
					fill='rgba(0, 0, 0, 0.1)'
				></path>
				<path
					d='M430 553.77L263.52 900L223.99999999999997 900L430 307.17999999999995z'
					fill='rgba(0, 0, 0, .075)'
				></path>
				<path
					d='M430 307.17999999999995L224 900L222.1 900L430 279.3299999999999z'
					fill='rgba(0, 0, 0, .05)'
				></path>
				<path
					d='M430 279.3299999999999L222.1 900L141.39999999999998 900L430 165.2199999999999z'
					fill='rgba(0, 0, 0, .025)'
				></path>
			</g>
			<defs>
				<mask id='SvgjsMask1110'>
					<rect width='430' height='900' fill='#ffffff'></rect>
				</mask>
				<linearGradient
					x1='100%'
					y1='50%'
					x2='0%'
					y2='50%'
					gradientUnits='userSpaceOnUse'
					id='SvgjsLinearGradient1111'
				>
					<stop stopColor='#0e2a47' offset='0'></stop>
					<stop stopColor={primary} offset='0'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
}
