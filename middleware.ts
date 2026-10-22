import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {


  const isAdminRoute =
    request.nextUrl.pathname.startsWith("/admin");


  const adminCookie =
    request.cookies.get("admin");


  if(isAdminRoute && adminCookie?.value !== "true"){

    return NextResponse.redirect(
      new URL("/login", request.url)
    );

  }


  return NextResponse.next();

}


export const config = {

  matcher:[
    "/admin/:path*",
  ],

};

