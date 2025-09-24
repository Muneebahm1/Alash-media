import { NextRequest } from 'next/server';
import { Session } from 'next-auth'; // Import Session type from next-auth

declare module 'next/server' {
  interface NextRequest {
    /**
     * NextAuth.js provides a convenient way to access the session from the request object.
     * This property is populated when the NextAuth.js middleware is active.
     */
    auth: Session | null;
  }
}