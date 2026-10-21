import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";



export async function POST(req: Request) {


  const cookieStore = await cookies();


  const session = cookieStore.get("session");



  if(!session){

    return NextResponse.json(

      {
        error:"Not logged in"
      },

      {
        status:401
      }

    );

  }



  const userId = Number(session.value);



  const { toolId } = await req.json();



  const existing = await prisma.favorite.findFirst({

    where:{

      userId,

      toolId,

    },

  });



  if(existing){


    await prisma.favorite.delete({

      where:{

        id: existing.id,

      },

    });



    return NextResponse.json({

      message:"Removed from favorites"

    });


  }




  await prisma.favorite.create({

    data:{

      userId,

      toolId,

    },

  });



  return NextResponse.json({

    message:"Added to favorites"

  });


}

