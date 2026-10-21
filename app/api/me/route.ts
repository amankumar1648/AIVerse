import { NextResponse } from "next/server";


export async function GET(req: Request) {


  const cookie = req.headers
    .get("cookie")
    ?.includes("session=");



  return NextResponse.json({

    loggedIn: Boolean(cookie),

  });


}

