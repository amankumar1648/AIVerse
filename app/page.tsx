import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {

  const tools = await prisma.tool.findMany({
    orderBy:{
      rating:"desc",
    },
    take:6,
  });


  const categories = [
    {
      name:"AI Assistants",
      icon:"🤖",
    },
    {
      name:"AI Coding",
      icon:"💻",
    },
    {
      name:"AI Image",
      icon:"🎨",
    },
    {
      name:"AI Video",
      icon:"🎬",
    },
    {
      name:"AI Writing",
      icon:"✍️",
    },
  ];


  return (

    <main>


      {/* Hero */}

      <section className="
      bg-black
      text-white
      py-24
      ">

        <div className="container-custom text-center">


          <h1 className="
          text-5xl
          md:text-7xl
          font-bold
          ">

            Discover The Best AI Tools

          </h1>


          <p className="
          mt-6
          text-xl
          text-gray-300
          max-w-3xl
          mx-auto
          ">

          AIVerse helps you discover, compare and explore the latest AI tools for coding, writing, design, productivity and creativity.

          </p>


          <div className="mt-10 flex justify-center gap-4">


            <Link

            href="/tools"

            className="
            bg-white
            text-black
            px-8
            py-4
            rounded-xl
            font-semibold
            hover:scale-105
            transition
            ">

            Explore AI Tools →

            </Link>



            <Link

            href="/submit"

            className="
            border
            border-white
            px-8
            py-4
            rounded-xl
            ">

            Submit Tool

            </Link>


          </div>


        </div>

      </section>



      {/* Stats */}


      <section className="container-custom py-12">


        <div className="
        grid
        md:grid-cols-3
        gap-6
        text-center
        ">


          <div className="border rounded-2xl p-8">

            <h2 className="text-4xl font-bold">
              40+
            </h2>

            <p className="text-gray-600 mt-2">
              AI Tools
            </p>

          </div>



          <div className="border rounded-2xl p-8">

            <h2 className="text-4xl font-bold">
              10+
            </h2>

            <p className="text-gray-600 mt-2">
              Categories
            </p>

          </div>



          <div className="border rounded-2xl p-8">

            <h2 className="text-4xl font-bold">
              100%
            </h2>

            <p className="text-gray-600 mt-2">
              Curated
            </p>

          </div>


        </div>


      </section>




      {/* Featured Tools */}


      <section className="container-custom py-16">


        <h2 className="text-4xl font-bold mb-10">

          ⭐ Top AI Tools

        </h2>



        <div className="grid md:grid-cols-3 gap-8">


        {tools.map((tool)=>(


          <Link

          key={tool.id}

          href={`/tools/${tool.slug}`}

          className="
          border
          rounded-3xl
          p-6
          hover:shadow-2xl
          hover:-translate-y-2
          transition
          ">


            <div className="relative w-20 h-20">

              <Image

              src={tool.image}

              alt={tool.name}

              fill

              className="object-contain"

              />

            </div>


            <h3 className="text-2xl font-bold mt-5">

              {tool.name}

            </h3>


            <p className="text-gray-500 mt-2">

              {tool.category}

            </p>


            <p className="mt-3">

              ⭐ {tool.rating}

            </p>


          </Link>


        ))}


        </div>


      </section>




      {/* Categories */}


      <section className="container-custom py-16">


        <h2 className="text-4xl font-bold mb-10">

          Explore Categories

        </h2>



        <div className="grid md:grid-cols-5 gap-5">


        {categories.map((cat)=>(


          <Link

          href="/tools"

          key={cat.name}

          className="
          border
          rounded-2xl
          p-6
          text-center
          hover:shadow-xl
          transition
          ">


            <div className="text-4xl">
              {cat.icon}
            </div>


            <p className="font-semibold mt-4">

              {cat.name}

            </p>


          </Link>


        ))}


        </div>


      </section>




      {/* About */}


      <section className="container-custom py-16">


        <div className="
        border
        rounded-3xl
        p-10
        ">


          <h2 className="text-4xl font-bold">

            Why Choose AIVerse?

          </h2>


          <p className="mt-5 text-gray-600 text-lg">

          AIVerse makes it simple to discover powerful AI tools. Explore tools by category, pricing, ratings and use cases in one place.

          </p>


        </div>


      </section>



    </main>

  );

};

