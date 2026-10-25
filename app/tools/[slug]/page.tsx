import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

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
    title: `${tool.name} - Features, Pricing & Review | AIVerse`,
    description: tool.description,

    openGraph: {
      title: `${tool.name} - AI Tool Review | AIVerse`,
      description: tool.description,
      images: [tool.image],
    },

    twitter: {
      card: "summary_large_image",
      title: `${tool.name} - AI Tool Review | AIVerse`,
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
    where: {
      slug,
    },
  });


  if (!tool) {
    return (
      <main className="container-custom py-20">
        <h1 className="text-3xl font-bold">
          Tool not found
        </h1>
      </main>
    );
  }



  return (
    <main className="container-custom py-12">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": tool.name,
            "description": tool.description,
            "applicationCategory": "AI Software",
            "operatingSystem": "Web",
            "url": `https://aiverse2.netlify.app/tools/${tool.slug}`,
            "image": `https://aiverse2.netlify.app${tool.image}`,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          }),
        }}
      />


      <article className="max-w-4xl mx-auto">


        <div className="flex flex-col md:flex-row gap-8 items-center mb-10">

          <div className="relative w-32 h-32 rounded-3xl border bg-white">

            <Image
              src={tool.image}
              alt={tool.name}
              fill
              className="object-contain p-5"
            />

          </div>


          <div>

            <h1 className="text-4xl font-bold">
              {tool.name}
            </h1>


            <p className="text-gray-500 mt-2">
              {tool.category}
            </p>


            <div className="flex gap-3 mt-4">

              <span className="bg-yellow-100 px-4 py-2 rounded-full">
                ⭐ {tool.rating}
              </span>


              <span className="bg-blue-100 px-4 py-2 rounded-full">
                {tool.pricing}
              </span>

            </div>

          </div>

        </div>



        <section className="mb-8">

          <h2 className="text-2xl font-bold mb-3">
            About {tool.name}
          </h2>

          <p className="text-lg text-gray-700">
            {tool.description}
          </p>

        </section>



        {tool.bestFor && (
          <section className="mb-8">

            <h2 className="text-2xl font-bold mb-3">
              Best For
            </h2>

            <p className="text-gray-700">
              {tool.bestFor}
            </p>

          </section>
        )}



        {tool.features && (
          <section className="mb-8">

            <h2 className="text-2xl font-bold mb-3">
              Features
            </h2>

            <p className="text-gray-700">
              {tool.features}
            </p>

          </section>
        )}



        {tool.pros && (
          <section className="mb-8">

            <h2 className="text-2xl font-bold mb-3">
              Pros
            </h2>

            <p className="text-gray-700">
              {tool.pros}
            </p>

          </section>
        )}



        {tool.cons && (
          <section className="mb-8">

            <h2 className="text-2xl font-bold mb-3">
              Cons
            </h2>

            <p className="text-gray-700">
              {tool.cons}
            </p>

          </section>
        )}



        {tool.alternatives && (
          <section className="mb-8">

            <h2 className="text-2xl font-bold mb-3">
              Alternatives
            </h2>

            <p className="text-gray-700">
              {tool.alternatives}
            </p>

          </section>
        )}



        <div className="border rounded-2xl p-6 mb-8">

          <p className="text-gray-600">
            AIVerse provides information to help users discover AI tools.
            Features, pricing and availability may change, so always check
            the official website for the latest details.
          </p>

        </div>



        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 py-3 rounded-xl"
        >
          Visit Official Website →
        </a>


      </article>

    </main>
  );
}

