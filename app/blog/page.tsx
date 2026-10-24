import Link from "next/link";
import type { Route } from "next";
export default function BlogPage() {
const posts: {
  title: string;
  description: string;
  link: Route;
}[] = [
    {
      title: "Best AI Tools for Students in 2026",
      description:
        "Discover the best AI tools that help students with studying, coding, productivity and learning.",
      link: "/blog/best-ai-tools-for-students-2026",
    },
    {
      title: "ChatGPT vs Gemini vs Claude in 2026",
      description:
        "Compare ChatGPT, Gemini and Claude to find the best AI assistant for students, coding, writing and productivity.",
      link: "/blog/chatgpt-vs-gemini-vs-claude-2026",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        AIVerse Blog
      </h1>

      <div className="grid gap-6">

        {posts.map((post) => (
          <article
            key={post.link}
            className="border rounded-xl p-6"
          >

            <h2 className="text-2xl font-bold">
              {post.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {post.description}
            </p>

            <Link
              href={post.link}
              className="inline-block mt-5 font-semibold text-blue-600"
            >
              Read More →
            </Link>

          </article>
        ))}

      </div>

    </main>
  );
}

