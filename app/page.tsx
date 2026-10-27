import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {

  const tools = await prisma.tool.findMany({
    orderBy: {
      rating: "desc",
    },
    take: 6,
  });


  const categories = [
    "AI Assistant",
    "AI Coding",
    "AI Image Generator",
    "AI Video",
    "AI Writing",
  ];


  const faqs = [
    {
      q: "What is AIVerse?",
      a: "AIVerse is an AI tools directory that helps users discover, compare and explore useful AI software for different needs."
    },
    {
      q: "Who can use AIVerse?",
      a: "Students, developers, creators, businesses and professionals can use AIVerse to find AI tools."
    },
    {
      q: "Are AI tools on AIVerse free?",
      a: "AI tools have different pricing models. Some are free, some offer free plans and others require payment."
    },
    {
      q: "How does AIVerse organize AI tools?",
      a: "Tools are organized by categories, features, ratings and use cases to make discovery easier."
    }
  ];


  return (
    <main>


      <section className="container-custom py-20 text-center">

        <h1 className="text-5xl md:text-6xl font-bold">
          Discover The Best AI Tools in One Place
        </h1>


        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          AIVerse helps students, developers, creators and professionals
          discover, compare and explore the best AI tools for productivity,
          coding, writing, design and creativity.
        </p>


        <div className="mt-8 flex justify-center gap-4">

          <Link
            href="/tools"
            className="bg-black text-white px-8 py-3 rounded-xl"
          >
            Explore AI Tools →
          </Link>


          <Link
            href="/submit"
            className="border px-8 py-3 rounded-xl"
          >
            Submit Tool
          </Link>

        </div>

      </section>



      <section className="container-custom py-12">

        <h2 className="text-3xl font-bold mb-8">
          ⭐ Featured AI Tools
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {tools.map((tool) => (

            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="border rounded-2xl p-6 hover:shadow-xl transition"
            >

              <div className="relative w-20 h-20 mb-5">

                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />

              </div>


              <h3 className="text-xl font-bold">
                {tool.name}
              </h3>


              <p className="text-gray-500">
                {tool.category}
              </p>


              <p className="mt-3">
                ⭐ {tool.rating}
              </p>


            </Link>

          ))}

        </div>

      </section>




      <section className="container-custom py-12">

        <h2 className="text-3xl font-bold mb-8">
          Popular Categories
        </h2>


        <div className="grid md:grid-cols-5 gap-4">

          {categories.map((category)=>(

            <Link
              key={category}
              href="/tools"
              className="border rounded-xl p-5 text-center hover:shadow-lg"
            >
              {category}
            </Link>

          ))}

        </div>

      </section>




      <section className="container-custom py-12">

        <h2 className="text-3xl font-bold mb-6">
          Why Choose AIVerse?
        </h2>


        <p className="text-gray-700 max-w-4xl">
          AIVerse makes AI discovery simple by organizing useful tools
          in one place. Users can explore software based on categories,
          features, ratings and practical use cases.
        </p>

      </section>




      <section className="container-custom py-12">

        <h2 className="text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h2>


        <div className="space-y-6">

          {faqs.map((faq)=>(

            <div
              key={faq.q}
              className="border rounded-xl p-6"
            >

              <h3 className="text-xl font-bold">
                {faq.q}
              </h3>


              <p className="mt-3 text-gray-700">
                {faq.a}
              </p>

            </div>

          ))}

        </div>


      </section>


    </main>
  );
}

