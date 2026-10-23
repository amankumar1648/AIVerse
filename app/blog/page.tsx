import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        AIVerse Blog
      </h1>

      <div className="border rounded-lg p-6">

        <h2 className="text-2xl font-bold">
          Best AI Tools for Students 2026
        </h2>

        <p className="mt-3 leading-7">
          Explore the best AI tools that help students learn,
          study and improve productivity.
        </p>

        <Link
          href="/blog/best-ai-tools-for-students-2026"
          className="inline-block mt-5 font-bold text-blue-600"
        >
          Read More →
        </Link>

      </div>

    </main>
  );
}

