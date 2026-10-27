import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ToolsPage() {

  const tools = await prisma.tool.findMany({
    orderBy: {
      rating: "desc",
    },
  });


  return (
    <main className="container-custom py-16">

      <section className="text-center mb-16">

        <h1 className="text-5xl font-bold">
          Explore the Best AI Tools
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Discover and compare AI tools for coding, writing, design,
          productivity, education and creativity. AIVerse helps you
          find useful artificial intelligence platforms in one place.
        </p>

      </section>


      <section>

        <h2 className="text-3xl font-bold mb-8">
          All AI Tools
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {tools.map((tool) => (

            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="border rounded-2xl p-6 hover:shadow-xl transition"
            >

              <div className="relative w-20 h-20 mb-5">

                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />

              </div>


              <h3 className="text-xl font-bold">
                {tool.name}
              </h3>


              <p className="text-gray-500 mt-2">
                {tool.category}
              </p>


              <p className="mt-3">
                ⭐ Rating: {tool.rating}
              </p>


              <p className="mt-3 text-gray-700">
                {tool.description}
              </p>


            </Link>

          ))}

        </div>

      </section>


      <section className="mt-16 border rounded-2xl p-8">

        <h2 className="text-3xl font-bold mb-4">
          Find the Right AI Tool
        </h2>

        <p className="text-gray-700">
          Whether you are a student, developer, creator or business
          professional, AIVerse helps you discover AI software with
          information about features, pricing, ratings and use cases.
          Always check the official website for the latest details.
        </p>

      </section>


    </main>
  );
}

