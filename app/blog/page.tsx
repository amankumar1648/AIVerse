export const metadata = {
  title: "AIVerse Blog - AI Tools, Guides and Latest Updates",
  description:
    "Explore AI tool guides, comparisons, tutorials and the latest artificial intelligence trends.",
};

const posts = [
  {
    title: "Best AI Tools for Students in 2026",
    description:
      "Discover the best AI tools that help students with learning, research, productivity and coding.",
    link: "/blog/best-ai-tools-for-students-2026",
  },
  {
    title: "ChatGPT vs Gemini vs Claude: Which AI Assistant is Best?",
    description:
      "A detailed comparison of popular AI assistants based on features, performance and use cases.",
    link: "/blog/chatgpt-vs-gemini-vs-claude-2026",
  },
];

export default function BlogPage() {
  return (
    <main className="container-custom py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          AIVerse Blog
        </h1>

        <p className="text-gray-700 text-lg leading-8 mb-10">
          Learn about artificial intelligence, discover useful AI tools,
          compare platforms and stay updated with the latest AI trends.
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          {posts.map((post) => (
            <article
              key={post.link}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold mb-3">
                {post.title}
              </h2>

              <p className="text-gray-700 mb-5">
                {post.description}
              </p>

              <a
                href={post.link}
                className="font-semibold text-blue-600"
              >
                Read Article →
              </a>
            </article>
          ))}

        </div>

      </div>
    </main>
  );
}

