import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;


  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");


  const tools = await prisma.tool.findMany({
    where: {
      category: {
        equals: categoryName,
      },
    },
    orderBy: {
      rating: "desc",
    },
  });


  return (
    <main className="container-custom py-16">


      <section className="text-center mb-16">

        <h1 className="text-5xl font-bold">
          Best {categoryName} AI Tools
        </h1>


        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the best {categoryName.toLowerCase()} AI tools on
          AIVerse. Discover software with ratings, features, pricing
          information and use cases.
        </p>

      </section>



      <section>

        <h2 className="text-3xl font-bold mb-8">
          {categoryName} Tools
        </h2>


        {tools.length === 0 ? (

          <p className="text-gray-600">
            No tools available in this category yet.
          </p>

        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            {tools.map((tool) => (

              <Link
                key={tool.id}
                href={`/tools/${tool.slug}`}
                className="border rounded-2xl p-6 hover:shadow-xl transition"
              >

                <h3 className="text-xl font-bold">
                  {tool.name}
                </h3>


                <p className="mt-3 text-gray-600">
                  {tool.description}
                </p>


                <p className="mt-4">
                  ⭐ Rating: {tool.rating}
                </p>


                <p className="mt-3 underline">
                  View Tool →
                </p>


              </Link>

            ))}

          </div>

        )}

      </section>



      <section className="mt-16 border rounded-2xl p-8">

        <h2 className="text-3xl font-bold mb-4">
          About {categoryName} AI Tools
        </h2>


        <p className="text-gray-700">
          AIVerse helps users find useful AI software by organizing
          tools into categories. Compare different platforms and
          choose the right AI solution for your needs.
          Always check official websites for the latest pricing
          and availability.
        </p>

      </section>


    </main>
  );
}

