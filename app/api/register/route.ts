import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";


export async function POST(req: Request) {

  try {

    const { email, password } = await req.json();


    const existing = await prisma.user.findUnique({
      where:{
        email,
      },
    });


    if(existing){

      return NextResponse.json(
        {
          error:"User already exists",
        },
        {
          status:400,
        }
      );

    }


    const hashedPassword = await bcrypt.hash(
      password,
      10
    );


    const user = await prisma.user.create({

      data:{

        email,

        password:hashedPassword,

        role:"USER",

      },

    });


    return NextResponse.json({

      success:true,

      user:{
        id:user.id,
        email:user.email,
      },

    });



  } catch(error){

    console.error(error);


    return NextResponse.json(
      {
        error:"Registration failed",
      },
      {
        status:500,
      }
    );

  }

}

