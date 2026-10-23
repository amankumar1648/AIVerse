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
    orderBy:{
      rating:"desc",
    },
  });


  const featuredTools = await prisma.tool.findMany({
    where:{
      rating:{
        gte:4.7,
      },
    },
    orderBy:{
      rating:"desc",
    },
    take:4,
  });


  const featuredIds = featuredTools.map(
    tool=>tool.id
  );


  const allTools = await prisma.tool.findMany({
    where:{
      id:{
        notIn:featuredIds,
      },
    },
    orderBy:{
      rating:"desc",
    },
    take:9,
  });


  const categories = Array.from(
    new Set(
      tools.map(tool=>tool.category)
    )
  );


  return (

    <main className="min-h-screen">


      <Hero />


      <section className="px-8 mt-8">
        <SearchBar />
      </section>



      <section className="px-8 mt-12">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

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
            <p>Access</p>
          </div>


          <div className="border rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold">
              Free
            </h2>
            <p>Explore</p>
          </div>

        </div>

      </section>



      <section className="px-8 mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Why Choose AIVerse?
        </h2>


        <div className="grid md:grid-cols-3 gap-6">


          <div className="border rounded-2xl p-6">
            <h3 className="text-xl font-bold">
              🚀 Discover AI Tools
            </h3>
            <p className="mt-3 text-gray-600">
              Find the best AI tools for writing,
              coding, images, videos and productivity.
            </p>
          </div>


          <div className="border rounded-2xl p-6">
            <h3 className="text-xl font-bold">
              ⭐ Expert Ratings
            </h3>
            <p className="mt-3 text-gray-600">
              Compare AI tools using ratings,
              features and pricing information.
            </p>
          </div>


          <div className="border rounded-2xl p-6">
            <h3 className="text-xl font-bold">
              🔎 Easy Comparison
            </h3>
            <p className="mt-3 text-gray-600">
              Quickly find the right AI solution
              for your needs.
            </p>
          </div>


        </div>

      </section>




      <section className="px-8 mt-16">

        <FeaturedTools tools={featuredTools}/>

      </section>




      <section className="px-8 mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Popular AI Tools
        </h2>


        <div className="grid md:grid-cols-3 gap-6">

          {allTools.map(tool=>(
            <ToolCard
              key={tool.id}
              tool={tool}
            />
          ))}

        </div>


        <div className="text-center mt-10">

          <Link
            href="/tools"
            className="bg-black text-white px-8 py-3 rounded-xl inline-block"
          >
            View All AI Tools →
          </Link>

        </div>

      </section>




      <CategorySection categories={categories}/>




      <section className="px-8 mt-16 pb-16">

        <h2 className="text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h2>


        <div className="space-y-4">


          <div className="border rounded-xl p-5">
            <h3 className="font-bold">
              What is AIVerse?
            </h3>
            <p className="text-gray-600 mt-2">
              AIVerse is an AI tools directory where users
              can discover and compare useful AI tools.
            </p>
          </div>


          <div className="border rounded-xl p-5">
            <h3 className="font-bold">
              Are these AI tools free?
            </h3>
            <p className="text-gray-600 mt-2">
              Many AI tools offer free plans while some
              provide premium features.
            </p>
          </div>


          <div className="border rounded-xl p-5">
            <h3 className="font-bold">
              How can I find the best AI tool?
            </h3>
            <p className="text-gray-600 mt-2">
              Use categories, ratings and descriptions
              to choose the right AI tool.
            </p>
          </div>


        </div>


      </section>


    </main>

  );

}

