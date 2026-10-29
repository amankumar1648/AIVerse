import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  const tools = await prisma.tool.findMany({
    orderBy: {
      rating: "desc",
    },
    take: 6,
  });

  const categories = [
    {
      name: "AI Assistant",
      slug: "ai-assistant",
      icon: "🤖",
    },
    {
      name: "AI Coding",
      slug: "ai-coding",
      icon: "💻",
    },
    {
      name: "AI Image Generator",
      slug: "ai-image",
      icon: "🎨",
    },
    {
      name: "AI Video",
      slug: "ai-video",
      icon: "🎬",
    },
    {
      name: "AI Writing",
      slug: "ai-writing",
      icon: "✍️",
    },
  ];

  return (
    <main>

      <section className="container-custom py-20 text-center">

        <h1 className="text-5xl md:text-6xl font-bold">
          Discover The Best AI Tools in One Place
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          AIVerse helps students, developers, creators and professionals
          discover, compare and explore the best AI tools for productivity,
          coding, writing, design and creativity.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <Link
            href="/tools"
            className="bg-black text-white px-8 py-3 rounded-xl"
          >
            Explore AI Tools →
          </Link>

          <Link
            href="/submit"
            className="border px-8 py-3 rounded-xl"
          >
            Submit Tool
          </Link>

        </div>

      </section>


      <section className="container-custom py-12">

        <h2 className="text-3xl font-bold mb-8">
          ⭐ Featured AI Tools
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
                ⭐ {tool.rating}
              </p>

            </Link>

          ))}

        </div>

      </section>


      <section className="container-custom py-12">

        <h2 className="text-3xl font-bold mb-8">
          Popular Categories
        </h2>


        <div className="grid md:grid-cols-5 gap-4">


          {categories.map((category) => (

            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="border rounded-xl p-5 text-center hover:shadow-lg transition"
            >

              <div className="text-4xl">
                {category.icon}
              </div>

              <div className="mt-3 font-bold">
                {category.name}
              </div>


            </Link>

          ))}


        </div>

      </section>


      <section className="container-custom py-16">

        <h2 className="text-3xl font-bold mb-6">
          Why Choose AIVerse?
        </h2>


        <div className="grid md:grid-cols-3 gap-6">


          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl">
              Curated AI Tools
            </h3>

            <p className="mt-3 text-gray-600">
              Discover useful AI platforms selected for different needs.
            </p>
          </div>



          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl">
              Easy Comparison
            </h3>

            <p className="mt-3 text-gray-600">
              Compare AI tools by category, pricing and ratings.
            </p>
          </div>



          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl">
              Updated Database
            </h3>

            <p className="mt-3 text-gray-600">
              Explore modern AI tools in one growing directory.
            </p>
          </div>


        </div>

      </section>


      <section className="container-custom py-16">

        <h2 className="text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h2>


        <div className="space-y-4">


          <div className="border rounded-xl p-5">

            <h3 className="font-bold">
              What is AIVerse?
            </h3>

            <p className="mt-2 text-gray-600">
              AIVerse is an AI tools directory that helps users discover and
              compare artificial intelligence tools.
            </p>

          </div>



          <div className="border rounded-xl p-5">

            <h3 className="font-bold">
              Can I submit an AI tool?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes, users can submit AI tools through the submission page.
            </p>

          </div>


        </div>


      </section>


    </main>
  );
}

