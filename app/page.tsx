export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";

import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FeaturedTools from "@/components/FeaturedTools";
import ToolCard from "@/components/ToolCard";


export default async function HomePage() {


  const tools = await prisma.tool.findMany({

    orderBy: {
      rating: "desc",
    },

  });



  const featuredTools = tools.slice(0,4);



  return (

    <main className="min-h-screen">


      <Hero />



      <section className="px-8 mt-8">

        <SearchBar />

      </section>




      <section className="px-8 mt-12">


        <FeaturedTools

          tools={featuredTools}

        />


      </section>




      <section className="px-8 mt-12 pb-12">


        <h2 className="text-3xl font-bold mb-6">

          All AI Tools

        </h2>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


          {tools.map((tool)=>(


            <ToolCard

              key={tool.id}

              tool={tool}

            />


          ))}



        </div>


      </section>


    </main>

  );

}

