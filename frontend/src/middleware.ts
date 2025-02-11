import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
// import { decrypt } from '@/app/auth/encryption';
// import { cookies } from 'next/headers';
import { verifySession } from '@/app/auth/session';

// Define public routes that don't require authentication

// Define public routes
const publicRoutes = [ '/' ,'/login', '/signup', '/api/*'];

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Allow public routes
    if (publicRoutes.some(route => pathname.startsWith(route))) {
        return NextResponse.next();
    }

    // Verify session
    const session = await verifySession();

    if (!session) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

// Apply middleware to all routes except static files
export const config = {
    matcher: '/((?!_next|static|favicon.ico).*)'
};

