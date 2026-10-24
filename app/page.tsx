import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const tools = await prisma.tool.findMany({
    take: 6,
  });

  return (
    <main className="max-w-7xl mx-auto p-8">

      <section className="text-center py-16">
        <h1 className="text-5xl font-bold">
          AIVerse - AI Tools Directory 🚀
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Discover the best AI tools for productivity,
          learning, coding and creativity.
        </p>
      </section>


      <section>
        <h2 className="text-3xl font-bold mb-6">
          Featured AI Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="border rounded-xl p-6"
            >
              <h3 className="text-xl font-bold">
                {tool.name}
              </h3>

              <p className="mt-2 text-gray-600">
                {tool.description}
              </p>
            </Link>
          ))}

        </div>
      </section>


      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Latest AI Articles
        </h2>


        <div className="grid md:grid-cols-2 gap-6">


          <article className="border rounded-xl p-6">

            <h3 className="text-xl font-bold">
              Best AI Tools for Students in 2026
            </h3>

            <p className="mt-3 text-gray-600">
              Explore AI tools that help students study,
              learn and improve productivity.
            </p>

            <Link
              href="/blog/best-ai-tools-for-students-2026"
              className="inline-block mt-4 text-blue-600 font-semibold"
            >
              Read Article →
            </Link>

          </article>


          <article className="border rounded-xl p-6">

            <h3 className="text-xl font-bold">
              ChatGPT vs Gemini vs Claude in 2026
            </h3>

            <p className="mt-3 text-gray-600">
              Compare the top AI assistants and find
              the best one for your needs.
            </p>

            <Link
              href="/blog/chatgpt-vs-gemini-vs-claude-2026"
              className="inline-block mt-4 text-blue-600 font-semibold"
            >
              Read Article →
            </Link>

          </article>


        </div>

      </section>


    </main>
  );
}

