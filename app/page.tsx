export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FeaturedTools from "@/components/FeaturedTools";
import ToolCard from "@/components/ToolCard";
import CategorySection from "@/components/CategorySection";
import Link from "next/link";


export default async function HomePage() {

  const tools = await prisma.tool.findMany({
    orderBy: {
      rating: "desc",
    },
  });


  const featuredTools = await prisma.tool.findMany({
    where: {
      rating: {
        gte: 4.7,
      },
    },
    orderBy: {
      rating: "desc",
    },
    take: 4,
  });


  const featuredIds = featuredTools.map(
    (tool) => tool.id
  );


  const allTools = await prisma.tool.findMany({
    where: {
      id: {
        notIn: featuredIds,
      },
    },
    orderBy: {
      rating: "desc",
    },
    take: 9,
  });


  const categories = Array.from(
    new Set(
      tools.map((tool) => tool.category)
    )
  );


  return (

    <main className="min-h-screen">

      <Hero />


      <section className="px-8 mt-8">
        <SearchBar />
      </section>


      <section className="px-8 mt-12">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">

          <div className="border rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold">
              {tools.length}+
            </h2>
            <p>AI Tools</p>
          </div>

          <div className="border rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold">
              {categories.length}
            </h2>
            <p>Categories</p>
          </div>

          <div className="border rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold">
              24/7
            </h2>
            <p>Available</p>
          </div>

          <div className="border rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold">
              Free
            </h2>
            <p>Explore</p>
          </div>

        </div>

      </section>


      <section className="px-8 mt-12">

        <FeaturedTools tools={featuredTools} />

      </section>


      <section className="px-8 mt-12 pb-12">

        <h2 className="text-3xl font-bold mb-6">
          Popular AI Tools
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {allTools.map((tool)=>(
            <ToolCard
              key={tool.id}
              tool={tool}
            />
          ))}

        </div>


        <div className="text-center mt-10">

          <Link
            href="/tools"
            className="inline-block bg-black text-white px-8 py-3 rounded-xl"
          >
            View All AI Tools →
          </Link>

        </div>

      </section>


      <CategorySection categories={categories} />


    </main>

  );
}

