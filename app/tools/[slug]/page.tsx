export const dynamic = "force-dynamic";
import FavoriteButton from "@/components/FavoriteButton";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";


interface PageProps {

  params: Promise<{
    slug: string;
  }>;

}


export async function generateMetadata({

  params,

}: PageProps) {


  const {slug}=await params;


  const tool = await prisma.tool.findUnique({

    where:{
      slug,
    },

  });



  return {

    title: tool
      ? `${tool.name} - AI Tool | AIVerse`
      : "AI Tool | AIVerse",


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

    <main className="min-h-screen p-8">


      <div className="max-w-4xl mx-auto">


        <div className="border rounded-2xl p-8">


          {tool.image && (

            <img

              src={tool.image}

              alt={tool.name}

              className="w-32 h-32 object-contain mb-6"

            />

          )}



          <h1 className="text-4xl font-bold mb-4">

            {tool.name}

          </h1>



          <div className="flex gap-3 flex-wrap mb-6">


            <span className="border px-3 py-1 rounded">

              ⭐ {tool.rating}

            </span>


            <span className="border px-3 py-1 rounded">

              {tool.category}

            </span>


            <span className="border px-3 py-1 rounded">

              {tool.pricing}

            </span>


          </div>



          <p className="text-lg mb-8">

            {tool.description}

          </p>



          <a

            href={tool.website}

            target="_blank"

            rel="noopener noreferrer"

            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl"

          >

            Visit Website →

          </a>
<FavoriteButton toolId={tool.id} />



        </div>


      </div>


    </main>

  );

}

