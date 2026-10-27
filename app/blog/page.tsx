export const metadata = {
  title: "AIVerse Blog - AI Tools Guides, Reviews and Comparisons",
  description:
    "Read AI tool guides, reviews, comparisons and tutorials. Learn about the latest artificial intelligence tools for students, developers, creators and professionals.",
};

import Link from "next/link";

const posts = [
  {
    title: "Best AI Tools for Students in 2026",
    description:
      "Discover AI tools that help students with learning, research, writing, coding and productivity.",
    link: "/blog/best-ai-tools-for-students-2026" as const,
  },
  {
    title: "ChatGPT vs Gemini vs Claude: Which AI Assistant is Best?",
    description:
      "Compare popular AI assistants based on features, performance, pricing and real-world use cases.",
    link: "/blog/chatgpt-vs-gemini-vs-claude-2026" as const,
  },
];

export default function BlogPage() {
  return (
    <main className="container-custom py-16">

      <section className="max-w-4xl mx-auto text-center">

        <h1 className="text-5xl font-bold">
          AIVerse AI Blog
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Explore artificial intelligence guides, AI tool reviews,
          comparisons and tutorials. AIVerse helps students,
          developers, creators and professionals understand the
          rapidly growing world of AI.
        </p>

      </section>


      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Latest AI Guides
        </h2>


        <div className="grid md:grid-cols-2 gap-8">

          {posts.map((post) => (

            <article
              key={post.link}
              className="border rounded-2xl p-6 hover:shadow-xl transition"
            >

              <h3 className="text-2xl font-bold">
                {post.title}
              </h3>


              <p className="mt-4 text-gray-600">
                {post.description}
              </p>


              <Link
                href={post.link}
                className="inline-block mt-6 underline"
              >
                Read Article →
              </Link>


            </article>

          ))}

        </div>

      </section>



      <section className="mt-16 max-w-4xl">

        <h2 className="text-3xl font-bold mb-5">
          Why Read AIVerse Blog?
        </h2>


        <p className="text-gray-700 leading-8">
          Artificial intelligence is changing the way people study,
          work and create. Our blog provides simple explanations,
          AI tool comparisons and practical guides to help users
          choose the right AI platforms.
        </p>


        <ul className="mt-6 list-disc ml-6 text-gray-700 space-y-2">
          <li>AI tool reviews and comparisons</li>
          <li>Guides for students and professionals</li>
          <li>Latest AI trends and updates</li>
          <li>Practical tips for using AI effectively</li>
        </ul>


      </section>


    </main>
  );
}

