import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Stenkowa Strona',
		short_name: 'Stenkowa',
		description:
			'Twoja nowa, w pełni konfigurowalna strona startowa w przeglądarce.',
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#0050b8',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	};
}
