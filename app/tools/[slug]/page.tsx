export const dynamic = "force-dynamic";

import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const tool = await prisma.tool.findUnique({
    where: {
      slug,
    },
  });

  return {
    title: tool
      ? `${tool.name} - AI Tool | AIVerse`
      : "AI Tools | AIVerse",

    description: tool
      ? tool.description
      : "Discover the best AI tools on AIVerse",
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;

  const tool = await prisma.tool.findUnique({
    where: {
      slug,
    },
  });

  if (!tool) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex flex-col md:flex-row gap-8 items-start">

            <Image
              src={tool.image}
              alt={tool.name}
              width={160}
              height={160}
              className="rounded-2xl border object-contain"
            />

            <div>

              <h1 className="text-5xl font-bold mb-4">
                {tool.name}
              </h1>

              <div className="flex gap-3 flex-wrap mb-6">

                <span className="bg-yellow-100 px-4 py-2 rounded-full">
                  ⭐ {tool.rating}
                </span>

                <span className="bg-blue-100 px-4 py-2 rounded-full">
                  {tool.category}
                </span>

                <span className="bg-green-100 px-4 py-2 rounded-full">
                  {tool.pricing}
                </span>

              </div>

              <p className="text-lg text-gray-600 mb-6">
                {tool.description}
              </p>


              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-3 rounded-xl hover:opacity-80"
              >
                Visit Official Website →
              </a>


              <div className="mt-5">
                <FavoriteButton toolId={tool.id} />
              </div>


            </div>

          </div>


        </div>


      </div>

    </main>
  );
}

