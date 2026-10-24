import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tool = await prisma.tool.findUnique({
    where: {
      slug,
    },
  });

  if (!tool) {
    return (
      <main className="container-custom py-20">
        <h1 className="text-3xl font-bold">
          Tool not found
        </h1>
      </main>
    );
  }

  return (
    <main className="container-custom py-12">

      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col md:flex-row gap-8 items-center mb-10">

          <div className="relative w-32 h-32 rounded-3xl border bg-white">
            <Image
              src={tool.image}
              alt={tool.name}
              fill
              className="object-contain p-5"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              {tool.name}
            </h1>

            <p className="text-gray-500 mt-2">
              {tool.category}
            </p>

            <div className="flex gap-3 mt-4">
              <span className="bg-yellow-100 px-4 py-2 rounded-full">
                ⭐ {tool.rating}
              </span>

              <span className="bg-blue-100 px-4 py-2 rounded-full">
                {tool.pricing}
              </span>
            </div>
          </div>

        </div>


        <p className="text-lg mb-8">
          {tool.description}
        </p>


        {tool.features && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Features
            </h2>
            <p>{tool.features}</p>
          </section>
        )}


        {tool.pros && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Pros
            </h2>
            <p>{tool.pros}</p>
          </section>
        )}


        {tool.cons && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Cons
            </h2>
            <p>{tool.cons}</p>
          </section>
        )}


        {tool.alternatives && (
           <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Alternatives
            </h2>
            <p>{tool.alternatives}</p>
          </section>
        )}


        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 py-3 rounded-xl"
        >
          Visit Website →
        </a>


      </div>

    </main>
  );
}

