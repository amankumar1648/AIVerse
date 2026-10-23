export default function BlogPage() {
  const articles = [
    {
      title: "Best AI Tools for Students in 2026",
      description:
        "Discover useful AI tools that help students with learning, research, writing and productivity.",
    },
    {
      title: "Top Free AI Coding Tools for Developers",
      description:
        "Explore AI coding assistants that help developers write, debug and improve code faster.",
    },
    {
      title: "ChatGPT vs Claude vs Gemini: Which AI Tool Is Better?",
      description:
        "A comparison of popular AI assistants and their features, use cases and strengths.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-6">
        AIVerse Blog 🚀
      </h1>

      <p className="text-lg leading-8 mb-8">
        Read helpful articles about artificial intelligence,
        AI tools, productivity, coding and the latest trends
        in the world of AI.
      </p>


      <div className="grid md:grid-cols-3 gap-6">

        {articles.map((article) => (
          <article
            key={article.title}
            className="border rounded-2xl p-6"
          >

            <h2 className="text-xl font-bold mb-3">
              {article.title}
            </h2>

            <p className="leading-7 text-gray-600">
              {article.description}
            </p>

            <button className="mt-5 bg-black text-white px-5 py-2 rounded-xl">
              Read More
            </button>

          </article>
        ))}

      </div>

    </main>
  );
}

