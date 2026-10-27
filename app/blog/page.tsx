import type { Route } from "next";
import Link from "next/link";

export const metadata = {
  title: "AIVerse Blog - AI Tools, Guides and Latest Updates",
  description:
    "Explore AI tool guides, comparisons, tutorials and the latest artificial intelligence trends.",
};

const posts: {
  title: string;
  description: string;
  date: string;
  link: Route;
}[] = [
  {
    title: "Best AI Tools for Students in 2026",
    description:
      "Discover the best AI tools for studying, coding, research, writing and improving productivity.",
    date: "Updated October 26, 2026",
    link: "/blog/best-ai-tools-for-students-2026",
  },
  {
    title: "ChatGPT vs Gemini vs Claude: Which AI Assistant is Best?",
    description:
      "Compare popular AI assistants based on features, coding ability, writing and productivity.",
    date: "Updated October 26, 2026",
    link: "/blog/chatgpt-vs-gemini-vs-claude-2026",
  },
];

export default function BlogPage() {
  return (
    <main className="container-custom py-16">

      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          AIVerse Blog
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
          Learn about artificial intelligence, discover useful AI tools,
          compare platforms and stay updated with the latest AI trends.
        </p>
      </section>


      <section className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">

        {posts.map((post) => (
          <article
            key={post.link}
            className="border rounded-2xl p-8 hover:shadow-xl transition"
          >

            <h2 className="text-2xl font-bold mb-3">
              {post.title}
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              {post.date}
            </p>

            <p className="text-gray-700 leading-7 mb-6">
              {post.description}
            </p>


            <Link
              href={post.link}
              className="inline-block font-semibold underline"
            >
              Read Article →
            </Link>

          </article>
        ))}

      </section>

    </main>
  );
}

