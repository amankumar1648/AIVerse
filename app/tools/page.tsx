import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ToolsPage() {
  const tools = await prisma.tool.findMany({
    orderBy: {
      rating: "desc",
    },
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are AI tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI tools are software platforms that use artificial intelligence to help with tasks like writing, coding, design, productivity and creativity.",
        },
      },
      {
        "@type": "Question",
        name: "How does AIVerse help users find AI tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AIVerse helps users discover and compare AI tools by category, features, ratings and use cases.",
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

      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          Explore the Best AI Tools
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Discover and compare the best AI tools for coding, writing,
          design, productivity, education and creativity. AIVerse helps
          students, developers and creators find useful artificial
          intelligence platforms in one place.
        </p>
      </section>


      <section>
        <h2 className="text-3xl font-bold mb-8">
          All AI Tools
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

              <p className="mt-3 text-gray-600">
                {tool.description}
              </p>

            </Link>
          ))}

        </div>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Why Use AIVerse AI Tools Directory?
        </h2>

        <p className="text-gray-700">
          AIVerse organizes AI tools into categories to make discovery
          easier. Users can explore tools for programming, content
          creation, business, education and everyday productivity.
        </p>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <div className="border rounded-xl p-5">
            <h3 className="font-bold">
              What are AI tools?
            </h3>
            <p className="mt-2 text-gray-600">
              AI tools help users complete tasks using artificial
              intelligence technology.
            </p>
          </div>


          <div className="border rounded-xl p-5">
            <h3 className="font-bold">
              Can I compare different AI tools?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes, AIVerse helps users explore AI tools by categories,
              features and ratings.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

