import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


// APPROVE SUBMISSION
export async function POST(req: Request) {


  try {


    const body = await req.json();



    const submission = await prisma.submission.findUnique({

      where: {

        id: Number(body.id),

      },

    });



    if (!submission) {

      return NextResponse.json(

        { error: "Submission not found" },

        { status: 404 }

      );

    }



    const tool = await prisma.tool.create({

      data: {

        name: submission.name,

        slug: submission.slug,

        category: submission.category,

        description: submission.description,

        image: submission.image,

        rating: submission.rating,

        pricing: submission.pricing,

        website: submission.website,

      },

    });



    await prisma.submission.update({

      where: {

        id: submission.id,

      },

      data: {

        status: "approved",

      },

    });



    return NextResponse.json(tool);



  } catch (error) {


    return NextResponse.json(

      { error: "Approval failed" },

      { status: 500 }

    );


  }


}



// REJECT SUBMISSION
export async function DELETE(req: Request) {


  try {


    const body = await req.json();



    const submission = await prisma.submission.update({

      where: {

        id: Number(body.id),

      },

      data: {

        status: "rejected",

      },

    });



    return NextResponse.json(submission);



  } catch (error) {


    return NextResponse.json(

      { error: "Reject failed" },

      { status: 500 }

    );


  }


}

