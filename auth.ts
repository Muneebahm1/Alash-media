import NextAuth from "next-auth";
import { authConfig } from './auth.config';
import Credentials from "next-auth/providers/credentials";
import { User } from "./app/lib/definitions";
import {z} from 'zod';
import {taiconn} from '@/app/lib/db';
import bcrypt from "bcryptjs";

async function getUser(email: string): Promise<User | undefined> {
    try {
        const result = await taiconn.query(`SELECT * FROM users where email=$1`,
            [email]
        );
        const user = result.rows as User[];
        return user[0];
    }
    catch(error) {
        throw new Error('Failed to fetch user');
    }
    
};
export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                  .object({ email: z.string().email(), password: z.string().min(5) })
                  .safeParse(credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;
                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (passwordMatch) return user;
                    return null;
                }
                return null;
            },
        }),
    ],
});