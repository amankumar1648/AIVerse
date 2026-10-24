import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
async function checkAdmin() {
  const cookieStore = await cookies();

  const session = cookieStore.get("session");

  if (!session) {
    return false;
  }

  return true;
}

export async function PUT(req:Request){
  const isAdmin = await checkAdmin();

  if (!isAdmin) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {


    const body = await req.json();


    const tool = await prisma.tool.update({

      where:{

        id:Number(body.id),

      },


      data:{


        name:body.name,


        category:body.category,


        description:body.description,


        website:body.website,


      },


    });



    return NextResponse.json(tool);



  } catch(error){


    console.error(error);



    return NextResponse.json(

      {
        error:"Update failed"
      },

      {
        status:500
      }

    );


  }


}
export async function DELETE(req:Request){
  const isAdmin = await checkAdmin();

  if (!isAdmin) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const body = await req.json();



  const tool = await prisma.tool.delete({

    where:{

      id:Number(body.id),

    },

  });



  return NextResponse.json(tool);


}

