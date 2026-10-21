import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {

  const isAdminPage =
    request.nextUrl.pathname.startsWith("/admin");


  const adminCookie =
    request.cookies.get("admin");


  if (isAdminPage && adminCookie?.value !== "true") {

    return NextResponse.redirect(
      new URL("/login", request.url)
    );

  }


  return NextResponse.next();

}


export const config = {
  matcher: [
    "/admin/:path*",
  ],
};

