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
    title: `${tool.name} Review, Features & Pricing | AIVerse`,
    description: `Explore ${tool.name} features, pricing, rating and use cases. Discover if this AI tool is right for you with AIVerse.`,
    openGraph: {
      title: `${tool.name} AI Tool Review | AIVerse`,
      description: tool.description,
      images: [tool.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} AI Tool Review | AIVerse`,
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
    where: {
      category: tool.category,
      NOT: {
        id: tool.id,
      },
    },
    take: 3,
  });


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${tool.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: tool.description,
        },
      },
      {
        "@type": "Question",
        name: `What category does ${tool.name} belong to?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${tool.name} belongs to the ${tool.category} category.`,
        },
      },
    ],
  };


  return (
    <main className="container-custom py-16">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />


      <section className="grid md:grid-cols-2 gap-10 items-center">

        <div className="relative w-40 h-40">
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

          <p className="mt-4 text-gray-600 text-lg">
            {tool.description}
          </p>


          <div className="mt-6 space-y-2">

            <p>
              ⭐ Rating: {tool.rating}
            </p>

            <p>
              Category: {tool.category}
            </p>

            <p>
              Pricing: {tool.pricing}
            </p>

          </div>


          <a
            href={tool.website}
            target="_blank"
            className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl"
          >
            Visit Official Website →
          </a>

        </div>

      </section>



      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-5">
          About {tool.name}
        </h2>

        <p className="text-gray-700">
          {tool.name} is an AI-powered platform listed on AIVerse.
          Users can explore its features, pricing and use cases to
          understand how it can improve productivity and creativity.
        </p>

      </section>



      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-5">
          Key Features
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>AI-powered productivity features</li>
          <li>Simple and efficient user experience</li>
          <li>Useful for students, creators and professionals</li>
          <li>Helps automate digital tasks</li>
        </ul>

      </section>



      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-5">
          Frequently Asked Questions
        </h2>

        <div className="border rounded-xl p-5">

          <h3 className="font-bold">
            What is {tool.name}?
          </h3>

          <p className="mt-2 text-gray-600">
            {tool.description}
          </p>

        </div>

      </section>



      {relatedTools.length > 0 && (
        <section className="mt-16">

          <h2 className="text-3xl font-bold mb-8">
            Related AI Tools
          </h2>


          <div className="grid md:grid-cols-3 gap-6">

            {relatedTools.map((item) => (

              <Link
                key={item.id}
                href={`/tools/${item.slug}`}
                className="border rounded-xl p-5 hover:shadow-lg"
              >

                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {item.category}
                </p>

              </Link>

            ))}

          </div>

        </section>
      )}

    </main>
  );
}

