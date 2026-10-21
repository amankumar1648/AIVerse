import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET() {
  const submissions = await prisma.submission.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(submissions);
}



export async function POST(req: Request) {

  const data = await req.json();

  const submission = await prisma.submission.create({
    data,
  });

  return NextResponse.json(submission);
}

