import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
	pages: {
		signIn: '/login',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnLogin = nextUrl.pathname.startsWith('/login');
			if (!isLoggedIn) return false;
			if (isOnLogin) {
				if (isLoggedIn) {
					return Response.redirect(new URL('/', nextUrl));
				} else {
					return false;
				}
			}

			return true;
		},
	},
	providers: [],
} satisfies NextAuthConfig;
