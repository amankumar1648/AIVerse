export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
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



  const relatedTools = await prisma.tool.findMany({

    where: {

      category: tool.category,

      NOT: {
        slug,
      },

    },

    take: 3,

  });



  return (

    <main className="min-h-screen p-8 bg-gray-50">


      <div className="max-w-5xl mx-auto">


        <div className="bg-white rounded-3xl shadow-lg p-8">


          <div className="flex flex-col md:flex-row gap-8">


            {tool.image ? (

              <Image

                src={tool.image}

                alt={tool.name}

                width={160}

                height={160}

                className="rounded-2xl border object-contain"

              />

            ) : (

              <div className="w-40 h-40 rounded-2xl border flex items-center justify-center text-5xl">

                🤖

              </div>

            )}



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

                className="inline-block bg-black text-white px-8 py-3 rounded-xl"

              >

                Visit Official Website →

              </a>



              <div className="mt-5">

                <FavoriteButton toolId={tool.id}/>

              </div>


            </div>


          </div>


        </div>



        <div className="mt-10 bg-white rounded-3xl shadow-lg p-8">


          <h2 className="text-3xl font-bold mb-5">

            About {tool.name}

          </h2>


          <p className="text-gray-600 leading-7">

            {tool.name} is an AI tool in the {tool.category} category.
            It helps users improve productivity and complete tasks faster
            using artificial intelligence.

          </p>



          <h2 className="text-3xl font-bold mt-8 mb-5">

            Key Features

          </h2>


          <ul className="list-disc ml-6 text-gray-600 space-y-2">

            <li>AI-powered platform</li>

            <li>Improves productivity and workflow</li>

            <li>Useful for creators, students and professionals</li>

            <li>Available with {tool.pricing} plans</li>

          </ul>



          <h2 className="text-3xl font-bold mt-8 mb-5">

            Who Should Use {tool.name}?

          </h2>


          <p className="text-gray-600">

            Students, developers, creators, businesses and professionals
            can use {tool.name} to improve their work with AI.

          </p>



          <h2 className="text-3xl font-bold mt-8 mb-5">

            Frequently Asked Questions

          </h2>


          <div className="space-y-4">


            <div>

              <h3 className="font-bold">

                Is {tool.name} free?

              </h3>

              <p className="text-gray-600">

                {tool.name} provides {tool.pricing} options.

              </p>

            </div>



            <div>

              <h3 className="font-bold">

                What category is {tool.name}?

              </h3>

              <p className="text-gray-600">

                It belongs to the {tool.category} category.

              </p>

            </div>


          </div>


        </div>




        {relatedTools.length > 0 && (

          <div className="mt-10">


            <h2 className="text-3xl font-bold mb-5">

              Related AI Tools 🚀

            </h2>


            <div className="grid md:grid-cols-3 gap-5">


              {relatedTools.map((item)=>(

                <div
                  key={item.id}
                  className="bg-white border rounded-xl p-5"
                >

                  <h3 className="text-xl font-bold">

                    {item.name}

                  </h3>


                  <p className="text-gray-600 mt-2">

                    {item.description.slice(0,80)}...

                  </p>


                  <Link

                    href={`/tools/${item.slug}`}

                    className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-lg"

                  >

                    View Tool

                  </Link>


                </div>

              ))}


            </div>


          </div>

        )}



      </div>


    </main>

  );

}

