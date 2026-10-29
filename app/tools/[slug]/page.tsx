import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const tool = await prisma.tool.findUnique({
    where: { slug },
  });


  if (!tool) {
    return {
      title: "AI Tool Not Found - AIVerse",
    };
  }


  return {
    title: `${tool.name} AI Review (2026): Features, Pricing & Alternatives | AIVerse`,
    description: `Explore ${tool.name} features, pricing, ratings and use cases on AIVerse.`,
    keywords: [
      tool.name,
      `${tool.name} AI`,
      `${tool.name} review`,
      "AI tools",
    ],
    openGraph: {
      title: `${tool.name} AI Review | AIVerse`,
      description: tool.description,
      images: [tool.image],
    },
  };
}



export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {


  const { slug } = await params;


  const tool = await prisma.tool.findUnique({
    where: { slug },
  });


  if (!tool) {
    return (
      <main className="container-custom py-20 text-center">
        <h1 className="text-4xl font-bold">
          Tool Not Found
        </h1>
      </main>
    );
  }



  const relatedTools = await prisma.tool.findMany({

    where:{
      category: tool.category,
      NOT:{
        id: tool.id,
      },
    },

    take:3,

  });



  const softwareSchema = {

    "@context":"https://schema.org",

    "@type":"SoftwareApplication",

    name:tool.name,

    description:tool.description,

    applicationCategory:"AI Software",

    aggregateRating:{
      "@type":"AggregateRating",
      ratingValue:tool.rating,
      bestRating:"5",
    },

  };



  return (

    <main className="container-custom py-16">


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:JSON.stringify(softwareSchema),
        }}
      />



      <section className="grid md:grid-cols-2 gap-12 items-center">


        <div className="bg-gray-50 rounded-3xl p-10">

          <div className="relative w-48 h-48 mx-auto">

            <Image
              src={tool.image}
              alt={tool.name}
              fill
              className="object-contain"
            />

          </div>

        </div>



        <div>


          <span className="px-4 py-2 bg-blue-100 rounded-full">
            {tool.category}
          </span>



          <h1 className="text-5xl font-bold mt-6">

            {tool.name}

          </h1>



          <p className="text-gray-600 text-lg mt-5">

            {tool.description}

          </p>



          <div className="flex gap-3 mt-6 flex-wrap">


            <span className="bg-yellow-100 px-4 py-2 rounded-full">

              ⭐ {tool.rating}/5

            </span>



            <span className="bg-green-100 px-4 py-2 rounded-full">

              💰 {tool.pricing}

            </span>


          </div>



          <a
            href={tool.website}
            target="_blank"
            className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-xl"
          >

            Visit Official Website →

          </a>


        </div>


      </section>




      <section className="mt-16 grid md:grid-cols-2 gap-8">


        <div className="border rounded-2xl p-6">

          <h2 className="text-3xl font-bold mb-4">
            Features
          </h2>

          <p className="text-gray-600">
            {tool.features || "No features added yet."}
          </p>

        </div>



        <div className="border rounded-2xl p-6">

          <h2 className="text-3xl font-bold mb-4">
            Best For
          </h2>

          <p className="text-gray-600">
            {tool.bestFor || "General AI usage."}
          </p>

        </div>



        <div className="border rounded-2xl p-6">

          <h2 className="text-3xl font-bold mb-4">
            ✅ Pros
          </h2>

          <p>
            {tool.pros || "No pros added yet."}
          </p>

        </div>



        <div className="border rounded-2xl p-6">

          <h2 className="text-3xl font-bold mb-4">
            ❌ Cons
          </h2>

          <p>
            {tool.cons || "No cons added yet."}
          </p>

        </div>


      </section>




      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Related AI Tools
        </h2>


        <div className="grid md:grid-cols-3 gap-6">


        {relatedTools.map((item)=>(

          <Link
            key={item.id}
            href={`/tools/${item.slug}`}
            className="border rounded-2xl p-6 hover:shadow-xl"
          >


            <div className="relative w-16 h-16">

              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />

            </div>


            <h3 className="font-bold text-xl mt-4">

              {item.name}

            </h3>


            <p className="text-gray-500">

              {item.category}

            </p>


          </Link>

        ))}


        </div>


      </section>



    </main>

  );

}

