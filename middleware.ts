import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { routing } from '@/i18n/routing';

//export default NextAuth(authConfig).auth;

const {auth} =  NextAuth(authConfig);

// --- 2. Define Public Paths (Non-localized & Non-authenticated) ---
const PUBLIC_PATHS = [
  '/',
  '/login', // Your login page
];

const PROTECTED_BUT_NOT_LOCALIZED_BY_URL = ['/dashboard'];

const nextIntlMiddleware = createIntlMiddleware(routing);

// --- 4. Main Middleware Function (this is the new combined logic) ---
export default auth(async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const currentPath = pathname;

  // --- Step 1: Check for Public Paths ---
  // If the path is a public path, allow it to proceed directly without further auth or locale handling.
  // Note: These paths should also be excluded from the `matcher` below for efficiency.
  
  const isPublicPath = PUBLIC_PATHS.some((path) => currentPath === path || currentPath.startsWith(`${path}/`));
  if (isPublicPath) {
    return NextResponse.next();
  }
   
  // --- Step 2: Handle Authenticated but not locale-prefixed paths ---
  // If `request.auth` is available, it means the user is authenticated by NextAuth.
  // Check if the path is something like '/dashboard' which is authenticated but
  // not meant to have a locale prefix in the URL (e.g., /en/dashboard).
  // If you *do* want `/dashboard` to be localized (e.g., /en/dashboard), then remove it from here.
  const isDashboardPath = currentPath === '/dashboard' || currentPath.startsWith('/dashboard/');
  if (request.auth && isDashboardPath) {
    return NextResponse.next(); // User is authenticated and on a dashboard path, proceed directly.
  }

  // --- Step 3: Apply next-intl Middleware for Localized Paths ---
  // If we reach here, it means:
  // 1. It's not a public path.
  // 2. Auth has already run (because this entire function is wrapped by `auth()`).
  // 3. It's not a dashboard-like path that bypasses locale prefixing.
  // So, it's a path that should be localized (e.g., /home, /projects).
  // The `next-intl` middleware will now handle locale detection and URL rewriting.
  return nextIntlMiddleware(request);
});

export const config = {
    //matcher:['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
    matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)',
              '/dashboard/:path*'
    //matcher:['/(?/dashboard/:path*)'    
    ],
    
}

/*export const config = {
  matcher: ['/((?!_next|api|_static|favicon.ico).*)'],
};*/

//'/(en|ur|kk|ru)/:path*',