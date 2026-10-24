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

// APPROVE SUBMISSION
export async function POST(req: Request) {
  const isAdmin = await checkAdmin();

  if (!isAdmin) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

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
  const isAdmin = await checkAdmin();

  if (!isAdmin) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

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

