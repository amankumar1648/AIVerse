import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  const tools = await prisma.tool.findMany({
    orderBy: {
      rating: "desc",
    },
    take: 6,
  });

  const categories = [
    "AI Assistant",
    "AI Coding",
    "AI Image Generator",
    "AI Video",
    "AI Writing",
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AIVerse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AIVerse is an AI tools directory that helps users discover and compare useful AI tools for productivity, coding, design, writing and creativity.",
        },
      },
      {
        "@type": "Question",
        name: "How does AIVerse organize AI tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AIVerse organizes AI tools by categories, features, pricing and use cases.",
        },
      },
      {
        "@type": "Question",
        name: "Can users submit AI tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, users can submit AI tools through the submission page.",
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="container-custom py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Discover The Best AI Tools in One Place
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          AIVerse is a growing AI tools directory where students, developers,
          creators and professionals can discover, compare and explore the best
          AI tools for productivity, coding, writing, design and creativity.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/tools"
            className="bg-black text-white px-8 py-3 rounded-xl"
          >
            Explore AI Tools →
          </Link>

          <Link
            href="/submit"
            className="border px-8 py-3 rounded-xl"
          >
            Submit Tool
          </Link>
        </div>
      </section>


      <section className="container-custom py-12">
        <h2 className="text-3xl font-bold mb-8">
          ⭐ Featured AI Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="border rounded-2xl p-6 hover:shadow-xl transition"
            >
              <div className="relative w-20 h-20 mb-5">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-bold">
                {tool.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {tool.category}
              </p>

              <p className="mt-3">
                ⭐ {tool.rating}
              </p>
            </Link>
          ))}
        </div>
      </section>


      <section className="container-custom py-12">
        <h2 className="text-3xl font-bold mb-8">
          Popular Categories
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              href="/tools"
              className="border rounded-xl p-5 text-center hover:shadow-lg"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>


      <section className="container-custom py-16">
        <h2 className="text-3xl font-bold mb-6">
          Why Choose AIVerse?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl">
              Curated AI Tools
            </h3>
            <p className="mt-3 text-gray-600">
              Discover useful AI platforms selected for different needs.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl">
              Simple Comparison
            </h3>
            <p className="mt-3 text-gray-600">
              Compare AI tools by category, pricing and features.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl">
              Updated Information
            </h3>
            <p className="mt-3 text-gray-600">
              Find information about modern AI tools in one place.
            </p>
          </div>
        </div>
      </section>


      <section className="container-custom py-16">
        <h2 className="text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div className="border rounded-xl p-5">
            <h3 className="font-bold">
              What is AIVerse?
            </h3>
            <p className="mt-2 text-gray-600">
              AIVerse helps users discover and compare AI tools.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold">
              Can I submit an AI tool?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes, you can submit tools through our submission page.
            </p>
          </div>
        </div>
      </section>


      <section className="container-custom py-16">
        <h2 className="text-3xl font-bold">
          What is AIVerse?
        </h2>

        <p className="mt-4 text-gray-700">
          AIVerse is an AI tools directory that helps users discover
          artificial intelligence tools for productivity, coding,
          design and creativity.
        </p>
      </section>

    </main>
  );
}

