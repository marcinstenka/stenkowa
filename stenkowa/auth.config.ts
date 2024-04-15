import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
	pages: {
		signIn: '/login',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const { pathname } = nextUrl;
			if (isLoggedIn && (pathname === '/login' || pathname === '/sign-up')) {
				return Response.redirect(new URL('/', nextUrl));
			}
			if (
				!isLoggedIn &&
				(pathname === '/login' || pathname === '/sign-up' || pathname === '/')
			) {
				return true;
			}
			if (isLoggedIn) return true;
			return false;
		},
	},
	providers: [],
} satisfies NextAuthConfig;
