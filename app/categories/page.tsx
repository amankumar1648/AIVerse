import Link from "next/link";
import { prisma } from "@/lib/prisma";


export default async function CategoriesPage() {


  const tools = await prisma.tool.findMany();



  const categories = Array.from(

    new Set(

      tools.map((tool) => tool.category)

    )

  );



  return (

    <main className="min-h-screen p-8">


      <h1 className="text-4xl font-bold text-center mb-10">

        AI Tool Categories

      </h1>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


        {categories.map((category)=>(


          <Link

            key={category}

            href={`/categories/${category
              .toLowerCase()
              .replaceAll(" ", "-")}`}

          >


            <div

              className="
                border
                rounded-xl
                p-6
                hover:shadow-xl
                transition
              "

            >


              <h2 className="text-2xl font-bold">

                {category}

              </h2>



              <p className="mt-3 text-gray-600">

                Explore {category} AI tools →

              </p>


            </div>


          </Link>


        ))}


      </div>


    </main>

  );

}

