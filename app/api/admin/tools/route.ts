import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function PUT(req:Request){


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


  const body = await req.json();



  const tool = await prisma.tool.delete({

    where:{

      id:Number(body.id),

    },

  });



  return NextResponse.json(tool);


}

