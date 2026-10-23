export const dynamic = "force-dynamic";

import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import FavoriteButton from "@/components/FavoriteButton";


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}


export async function generateMetadata({params}: PageProps){

  const {slug} = await params;

  const tool = await prisma.tool.findUnique({
    where:{
      slug,
    },
  });


  return {
    title: tool
      ? `${tool.name} - AI Tool | AIVerse`
      : "AI Tools | AIVerse",

    description: tool?.description || "Discover AI tools on AIVerse",
  };

}



export default async function ToolPage({params}: PageProps){

  const {slug} = await params;


  const tool = await prisma.tool.findUnique({

    where:{
      slug,
    },

  });


  if(!tool){
    notFound();
  }



  return (

    <main className="min-h-screen bg-gray-50 p-8">

      <div className="max-w-5xl mx-auto">


        <div className="bg-white rounded-3xl shadow-lg p-8">


          <div className="flex flex-col md:flex-row gap-8">


            <Image

              src={tool.image || "/tools/default.png"}

              alt={tool.name}

              width={160}

              height={160}

              className="rounded-2xl border object-contain"

            />



            <div className="flex-1">


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



              <p className="text-gray-600 text-lg mb-6">
                {tool.description}
              </p>



              <a

                href={tool.website}

                target="_blank"

                className="bg-black text-white px-8 py-3 rounded-xl inline-block"

              >
                Visit Official Website →
              </a>



              <div className="mt-5">
                <FavoriteButton toolId={tool.id}/>
              </div>


            </div>


          </div>



          <section className="mt-10 grid md:grid-cols-2 gap-6">


            <div className="border rounded-xl p-6">

              <h2 className="text-2xl font-bold mb-3">
                🚀 Features
              </h2>

              <p>
                {tool.features || "No features added yet."}
              </p>

            </div>



            <div className="border rounded-xl p-6">

              <h2 className="text-2xl font-bold mb-3">
                🎯 Best For
              </h2>

              <p>
                {tool.bestFor || "General AI users"}
              </p>

            </div>



            <div className="border rounded-xl p-6">

              <h2 className="text-2xl font-bold mb-3">
                ✅ Pros
              </h2>

              <p>
                {tool.pros || "No pros added yet."}
              </p>

            </div>



            <div className="border rounded-xl p-6">

              <h2 className="text-2xl font-bold mb-3">
                ❌ Cons
              </h2>

              <p>
                {tool.cons || "No cons added yet."}
              </p>

            </div>



          </section>



          <section className="mt-8 border rounded-xl p-6">

            <h2 className="text-2xl font-bold mb-3">
              🔄 Alternatives
            </h2>

            <p>
              {tool.alternatives || "No alternatives added yet."}
            </p>

          </section>



        </div>


      </div>


    </main>

  );

}

