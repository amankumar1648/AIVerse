import Image from "next/image";
import Link from "next/link";
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
      title: "AI Tool Not Found | AIVerse",
    };
  }

  return {
    title: `${tool.name} AI Review, Features, Pricing & Alternatives | AIVerse`,
    description: tool.description,
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
    where: {
      category: tool.category,
      NOT: {
        id: tool.id,
      },
    },
    take: 3,
  });

  const howToUse = [
    `Visit the official ${tool.name} website.`,
    `Create an account or choose the available plan.`,
    `Explore the features and start using ${tool.name} for your workflow.`,
  ];

  return (
    <main className="container-custom py-16">

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": tool.name,
            "description": tool.description,
            "applicationCategory": tool.category,
            "url": tool.website,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": tool.rating,
              "bestRating": "5"
            }
          }),
        }}
      />

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">

        <div className="relative w-48 h-48">
          <Image
            src={tool.image}
            alt={tool.name}
            fill
            className="object-contain"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold">
            {tool.name}
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            {tool.description}
          </p>

          <div className="flex gap-3 mt-6 flex-wrap">

            <span className="bg-yellow-100 px-4 py-2 rounded-full">
              ⭐ {tool.rating}/5
            </span>

            <span className="bg-blue-100 px-4 py-2 rounded-full">
              {tool.category}
            </span>

            <span className="bg-green-100 px-4 py-2 rounded-full">
              {tool.pricing}
            </span>

          </div>

          <a
            href={tool.website}
            target="_blank"
            className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-xl"
          >
            Visit Website →
          </a>

        </div>

      </section>
      {/* Tool Details */}

      <section className="mt-20 grid md:grid-cols-2 gap-8">

        <div className="border rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-4">
            Features
          </h2>

          <p className="text-gray-700">
            {tool.features || "No features added yet."}
          </p>

        </div>


        <div className="border rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-4">
            Best For
          </h2>

          <p className="text-gray-700">
            {tool.bestFor || "Students, developers and creators."}
          </p>

        </div>

      </section>


      {/* How To Use */}

      <section className="mt-12 border rounded-2xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          How To Use {tool.name}
        </h2>

        <ol className="list-decimal ml-6 space-y-3 text-gray-700">

          {howToUse.map((step, index) => (
            <li key={index}>
              {step}
            </li>
          ))}

        </ol>

      </section>


      {/* Pros Cons */}

      <section className="mt-12 grid md:grid-cols-2 gap-8">


        <div className="border rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-4">
            ✅ Pros
          </h2>

          <p>
            {tool.pros || "No pros added yet."}
          </p>

        </div>


        <div className="border rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-4">
            ❌ Cons
          </h2>

          <p>
            {tool.cons || "No cons added yet."}
          </p>

        </div>


      </section>


      {/* Pricing */}

      <section className="mt-12 border rounded-2xl p-8">

        <h2 className="text-3xl font-bold mb-4">
          Pricing
        </h2>

        <p className="text-gray-700">
          {tool.name} pricing model: {tool.pricing}
        </p>

      </section>


      {/* Alternatives */}

      <section className="mt-12 border rounded-2xl p-8">

        <h2 className="text-3xl font-bold mb-4">
          Alternatives
        </h2>

        <p>
          {tool.alternatives || "Similar AI tools will be added soon."}
        </p>

      </section>


      {/* FAQ */}

      <section className="mt-12 border rounded-2xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h2>


        <div className="space-y-6">


          <div>
            <h3 className="font-bold text-xl">
              What is {tool.name}?
            </h3>

            <p className="text-gray-700 mt-2">
              {tool.name} is an AI tool that helps users with {tool.category.toLowerCase()} tasks.
            </p>
          </div>


          <div>
            <h3 className="font-bold text-xl">
              Is {tool.name} free?
            </h3>

            <p className="text-gray-700 mt-2">
              {tool.name} offers the following pricing option: {tool.pricing}.
            </p>
          </div>


          <div>
            <h3 className="font-bold text-xl">
              Who should use {tool.name}?
            </h3>

            <p className="text-gray-700 mt-2">
              {tool.bestFor || "Creators, students and professionals can use this tool."}
            </p>
          </div>


        </div>

      </section>

      {/* Related Tools */}

      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Related AI Tools
        </h2>


        <div className="grid md:grid-cols-3 gap-6">

          {relatedTools.map((item) => (

            <Link
              key={item.id}
              href={`/tools/${item.slug}`}
              className="border rounded-xl p-6 hover:shadow-xl"
            >

              <h3 className="font-bold text-xl">
                {item.name}
              </h3>


              <p className="mt-2 text-gray-600">
                {item.category}
              </p>


            </Link>

          ))}

        </div>

      </section>


    </main>
  );
}

