import Link from "next/link";

export const dynamic = "force-dynamic";

export default function CategoriesPage() {

  const categories = [
    {
      name: "AI Assistant",
      slug: "ai-assistant",
      description:
        "Discover AI assistants that help with research, productivity, learning and everyday tasks.",
    },
    {
      name: "AI Coding",
      slug: "ai-coding",
      description:
        "Explore AI coding tools that help developers write, debug and improve software.",
    },
    {
      name: "AI Image Generator",
      slug: "ai-image-generator",
      description:
        "Find AI image generation tools for creating artwork, designs and creative visuals.",
    },
    {
      name: "AI Video",
      slug: "ai-video",
      description:
        "Explore AI video tools for editing, creation and content production.",
    },
    {
      name: "AI Writing",
      slug: "ai-writing",
      description:
        "Discover AI writing tools for articles, emails, blogs and content creation.",
    },
  ];


  return (
    <main className="container-custom py-16">

      <section className="text-center mb-16">

        <h1 className="text-5xl font-bold">
          AI Tool Categories
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Explore AI tools by category. AIVerse helps you discover
          artificial intelligence software for coding, writing,
          design, productivity and creativity.
        </p>

      </section>


      <section className="grid md:grid-cols-3 gap-8">

        {categories.map((category) => (

          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="border rounded-2xl p-6 hover:shadow-xl transition"
          >

            <h2 className="text-2xl font-bold">
              {category.name}
            </h2>

            <p className="mt-4 text-gray-700">
              {category.description}
            </p>

            <p className="mt-5 underline">
              Explore Tools →
            </p>

          </Link>

        ))}

      </section>


      <section className="mt-16 border rounded-2xl p-8">

        <h2 className="text-3xl font-bold mb-4">
          Find the Best AI Software
        </h2>

        <p className="text-gray-700">
          AIVerse organizes AI platforms into simple categories
          so users can quickly find tools based on their needs.
          Always verify pricing and features from the official
          websites before using any service.
        </p>

      </section>


    </main>
  );
}

