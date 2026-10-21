import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";


export async function POST(req: Request) {

  try {

    const { email, password } = await req.json();


    const user = await prisma.user.findUnique({

      where: {
        email,
      },

    });



    if (!user) {

      return NextResponse.json(
        {
          error: "User not found",
        },
        {
          status: 404,
        }
      );

    }



    const passwordMatch = await bcrypt.compare(

      password,

      user.password

    );



    if (!passwordMatch) {

      return NextResponse.json(
        {
          error: "Invalid password",
        },
        {
          status: 401,
        }
      );

    }



    const response = NextResponse.json({

      success: true,

      message: "Login successful",

      user: {

        id: user.id,

        email: user.email,

      },

    });



    response.cookies.set(

      "session",

      String(user.id),

      {

        httpOnly: false,

        maxAge: 60 * 60 * 24 * 7,

        path: "/",

        sameSite: "lax",

      }

    );



    return response;


  } catch (error) {


    console.error(error);


    return NextResponse.json(

      {
        error: "Login failed",
      },

      {
        status: 500,
      }

    );


  }

}

