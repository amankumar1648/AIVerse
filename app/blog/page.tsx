import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        AIVerse Blog
      </h1>

      <div className="grid gap-6">

        <article className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold">
            Best AI Tools for Students in 2026
          </h2>

          <p className="mt-3 text-gray-600">
            Discover the best AI tools that help students
            with studying, productivity, coding and learning.
          </p>

          <Link
            href="/blog/best-ai-tools-for-students-2026"
            className="inline-block mt-5 font-semibold text-blue-600"
          >
            Read More →
          </Link>

        </article>

      </div>

    </main>
  );
}

