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
    "AI Assistant",
    "AI Coding",
    "AI Image Generator",
    "AI Video",
    "AI Writing",
  ];


  return (
    <main>

      {/* Hero Section */}

      <section className="container-custom py-20 text-center">

        <h1 className="text-5xl md:text-6xl font-bold">
          Discover The Best AI Tools
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the world's best AI tools for students,
          developers, creators and professionals.
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



      {/* Featured Tools */}

      <section className="container-custom py-12">

        <h2 className="text-3xl font-bold mb-8">
          ⭐ Featured AI Tools
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {tools.map((tool)=>(
            
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



      {/* Categories */}

      <section className="container-custom py-12">

        <h2 className="text-3xl font-bold mb-8">
          Popular Categories
        </h2>


        <div className="grid md:grid-cols-5 gap-4">

          {categories.map((category)=>(
            
            <Link
              key={category}
              href="/tools"
              className="border rounded-xl p-5 text-center hover:shadow-lg"
            >
              {category}
            </Link>

          ))}

        </div>

      </section>


    </main>
  );
}

