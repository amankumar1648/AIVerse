import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(req:Request){


  const {searchParams}=new URL(req.url);


  const query=searchParams.get("q") || "";



  const tools = await prisma.tool.findMany({

    where:{

      OR:[

        {

          name:{

            contains:query,

          },

        },

        {

          category:{

            contains:query,

          },

        },

        {

          description:{

            contains:query,

          },

        },


      ],

    },

    take:10,

  });



  return NextResponse.json(tools);


}

