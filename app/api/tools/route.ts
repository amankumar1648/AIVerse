import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all tools
export async function GET() {
  try {
    const tools = await prisma.tool.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(tools);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch tools" },
      { status: 500 }
    );
  }
}

// CREATE tool
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const tool = await prisma.tool.create({
      data: {
        name: body.name,
        slug: body.slug,
        category: body.category,
        description: body.description,
        image: body.image,
        rating: Number(body.rating),
        pricing: body.pricing,
        website: body.website,
      },
    });

    return NextResponse.json(tool);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Tool creation failed" },
      { status: 500 }
    );
  }
}

// UPDATE tool
export async function PUT(request: Request) {
  try {
    const body = await request.json();

    const tool = await prisma.tool.update({
      where: {
        id: Number(body.id),
      },
      data: {
        name: body.name,
        slug: body.slug,
        category: body.category,
        description: body.description,
        image: body.image,
        rating: Number(body.rating),
        pricing: body.pricing,
        website: body.website,
      },
    });

    return NextResponse.json(tool);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Tool update failed" },
      { status: 500 }
    );
  }
}

// DELETE tool
export async function DELETE(request: Request) {
  try {
    const body = await request.json();

    await prisma.tool.delete({
      where: {
        id: Number(body.id),
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Tool delete failed" },
      { status: 500 }
    );
  }
}

