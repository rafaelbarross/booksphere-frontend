import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {

    const token = request.cookies.get('library-token')?.value

    const signInUrl = new URL('/login', request.url);
    const homeUrl = new URL('/', request.url);

    if (!token) {

        if (request.nextUrl.pathname === '/login') {
            return NextResponse.next();

        }

        return NextResponse.redirect(signInUrl);

    }

    if (request.nextUrl.pathname === '/login') {

        return NextResponse.redirect(homeUrl);
        
    }


}


export const config = {
    matcher: ['/login', '/register', '/dashboard']
}