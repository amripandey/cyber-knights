import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const key = new TextEncoder().encode(process.env.JWT_SECRET);

const cookie = {
    name: 'session',
    options: {
        httpOnly: true,
        sameSite: 'lax',
        secure: true,
        path: '/',
    },
    duration: 24 * 60 * 60 * 1000,
}

export async function encrypt(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'ES256' })
        .setIssuedAt()
        .setExpirationTime('1day')
        .sign(key)
}

export async function decrypt(session) {
    try {
        const { payload } = await jwtVerify(session, key, {
            algorithms: ['ES256'],
        })

        return payload;
    } catch (error) {
        return null;
    }
}


export async function createSession(userId: number) {
    const expires = new Date(Date.now() + cookie.duration);
    const session = await encrypt({ userId, expires });

    const cookieStore = await cookies(); // Await the promise
    cookieStore.set(cookie.name, session, { ...cookie.options, expires, sameSite: "lax" });

    redirect('/');
}

export async function verifySession() {
    const cookieStore = await cookies(); // No need for `await`
    const sessionCookie = cookieStore.get('session')?.value; // Ensure this matches your cookie name

    if (!sessionCookie) {
        return null; // Return null instead of redirecting
    }

    try {
        const session = await decrypt(sessionCookie);

        if (!session?.userId) {
            return null;
        }

        return { userId: session.userId };
    } catch (error) {
        return null;
    }
}

/*
export async function verifySession(req: Request) {
    const sessionCookie = req.headers.get('cookie')?.split('; ')
        .find(row => row.startsWith('session='))
        ?.split('=')[1];

    if (!sessionCookie) {
        return null;
    }

    try {
        const session = await decrypt(sessionCookie);
        if (!session?.userId) {
            return null;
        }
        return { userId: session.userId };
    } catch (error) {
        return null;
    }
}
*/
export async function deleteSession() {
    const cookieStore = await cookies(); // Await the promise
    cookieStore.delete(cookie.name);
    redirect('/login');
}
