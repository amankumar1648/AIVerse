import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


// GET ALL SUBMISSIONS
export async function GET() {
  try {
    const submissions = await prisma.submission.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(submissions);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}



// CREATE SUBMISSION
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const submission = await prisma.submission.create({
      data: {
        name: body.name,
        slug:
          body.slug ||
          body.name
            .toLowerCase()
            .replaceAll(" ", "-"),

        category: body.category || "",
        description: body.description || "",
        image: body.image || "",
        rating: Number(body.rating) || 4.5,
        pricing: body.pricing || "",
        website: body.website || "",
        status: "pending",
      },
    });


    return NextResponse.json(submission);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Submission failed" },
      { status: 500 }
    );
  }
}




// APPROVE SUBMISSION
export async function PUT(req: Request) {

  try {

    const { id } = await req.json();


    const submission = await prisma.submission.findUnique({

      where:{
        id:Number(id),
      },

    });


    if(!submission){

      return NextResponse.json(
        {
          error:"Submission not found"
        },
        {
          status:404
        }
      );

    }



    const slug =
      submission.slug ||
      submission.name
      .toLowerCase()
      .replaceAll(" ","-");



    const existingTool = await prisma.tool.findUnique({

      where:{
        slug,
      },

    });



    if(!existingTool){

      await prisma.tool.create({

        data:{

          name:submission.name,

          slug,

          category:submission.category,

          description:submission.description,

          image:submission.image,

          rating:submission.rating,

          pricing:submission.pricing,

          website:submission.website,

        },

      });

    }



    await prisma.submission.update({

      where:{
        id:Number(id),
      },

      data:{
        status:"approved",
      },

    });



    return NextResponse.json({

      success:true,

      message:"Approved and added to tools",

    });



  } catch(error){

    console.error(error);


    return NextResponse.json(

      {
        error:"Approval failed"
      },

      {
        status:500
      }

    );

  }

}




// DELETE SUBMISSION
export async function DELETE(req: Request){

  try{

    const {id}=await req.json();


    await prisma.submission.delete({

      where:{
        id:Number(id),
      },

    });


    return NextResponse.json({

      success:true,

    });


  }catch(error){

    console.error(error);


    return NextResponse.json(

      {
        error:"Delete failed"
      },

      {
        status:500
      }

    );

  }

}

