import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('isAuthenticated');
  const isLoginPage = request.nextUrl.pathname === '/login';

  // If trying to access login page while authenticated, redirect to home
  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/homePage', request.url));
  }

  // If trying to access protected routes while not authenticated, redirect to login
  if (!isAuthenticated && !isLoginPage && request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 