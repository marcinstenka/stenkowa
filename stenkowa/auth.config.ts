import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
	pages: {
		signIn: '/login',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnTodos = nextUrl.pathname.startsWith('/todos');
			const isOnStorage = nextUrl.pathname.startsWith('/storage');
			const isOnBookmarks = nextUrl.pathname.startsWith('/bookmarks');
			if (isOnTodos) {
				if (isLoggedIn) return true;
				return false;
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/dashboard', nextUrl));
			}

			if (isOnStorage) {
				if (isLoggedIn) return true;
				return false;
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/storage', nextUrl));
			}

			if (isOnBookmarks) {
				if (isLoggedIn) return true;
				return false;
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/bookmarks', nextUrl));
			}

			return true;
		},
	},
	providers: [],
} satisfies NextAuthConfig;
