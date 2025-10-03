import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const loggedIn = !!auth?.user;
            const onDashboard = nextUrl.pathname.startsWith('/dashboard');
            // Only protect dashboard routes. Do not redirect globally to avoid loops.
            if (onDashboard) {
                return loggedIn;
            }
            // Public for all other routes
            return true;
        },
    },
    providers:[],
} satisfies NextAuthConfig;