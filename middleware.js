import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("better-auth.session-token");

  const isLoggedIn = !!token;

  const { pathname, search } = request.nextUrl;

  if (!isLoggedIn && pathname.startsWith("/products")) {

    const loginUrl = new URL("/login", request.url);

    // 🔥 SAVE ORIGINAL PAGE
    loginUrl.searchParams.set("callbackUrl", pathname);

    return NextResponse.redirect(loginUrl);
  }

  if (!isLoggedIn && pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*", "/profile/:path*"],
};