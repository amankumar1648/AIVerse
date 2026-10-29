import Image from "next/image";
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
    description: `Explore ${tool.name} AI features, pricing, ratings, use cases and alternatives. Find detailed AI tool information on AIVerse.`,
    keywords: [
      tool.name,
      `${tool.name} AI`,
      `${tool.name} review`,
      `${tool.name} pricing`,
      `${tool.name} alternatives`,
      "AI tools",
      "AI software",
    ],
    alternates: {
      canonical: `https://aiverse2.netlify.app/tools/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.name} AI Review | AIVerse`,
      description: tool.description,
      images: [tool.image],
    },
    twitter: {
      card: "summary_large_image",
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
    where: {
      category: tool.category,
      NOT: {
        id: tool.id,
      },
    },
    take: 3,
  });

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: "AI Software",
    operatingSystem: "Web",
    description: tool.description,
    image: `https://aiverse2.netlify.app${tool.image}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.rating,
      bestRating: "5",
    },
  };

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
        name: `What is ${tool.name} used for?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${tool.name} is used for AI-powered productivity and creative tasks.`,
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
          __html: JSON.stringify(softwareSchema),
        }}
      />

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
          <h1 className="text-5xl font-bold mb-4">
            {tool.name}
          </h1>

          <p className="text-lg opacity-80 mb-4">
            {tool.description}
          </p>

          <p>
            Category: <b>{tool.category}</b>
          </p>

          <p>
            Rating: ⭐ {tool.rating}/5
          </p>

          <p>
            Pricing: {tool.pricing}
          </p>

          <a
            href={tool.website}
            target="_blank"
            className="inline-block mt-6 px-6 py-3 rounded-lg bg-black text-white"
          >
            Visit Website
          </a>
        </div>

      </section>


      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Features
        </h2>

        <p>{tool.features}</p>

        <h2 className="text-3xl font-bold mt-10 mb-6">
          Pros
        </h2>

        <p>{tool.pros}</p>

        <h2 className="text-3xl font-bold mt-10 mb-6">
          Cons
        </h2>

        <p>{tool.cons}</p>

      </section>


      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Related AI Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {relatedTools.map((item) => (
            <a
              key={item.id}
              href={`/tools/${item.slug}`}
              className="border rounded-xl p-5"
            >
              <h3 className="font-bold">
                {item.name}
              </h3>

              <p>
                {item.category}
              </p>
            </a>
          ))}

        </div>

      </section>

    </main>
  );
}

