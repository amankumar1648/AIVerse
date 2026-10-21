import { prisma } from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";


export default async function AdminPage() {


  const tools = await prisma.tool.findMany();



  return (

    <main className="p-8">


      <h1 className="text-4xl font-bold mb-8">

        Admin Dashboard

      </h1>



      <div className="grid gap-5">


        {tools.map((tool)=>(


          <div

            key={tool.id}

            className="border rounded-xl p-5 flex justify-between items-center"

          >


            <div>

              <h2 className="text-xl font-bold">

                {tool.name}

              </h2>


              <p>

                {tool.category}

              </p>

            </div>



            <div className="flex gap-3">


              <Link

                href={`/admin/edit/${tool.id}`}

                className="bg-blue-600 text-white px-4 py-2 rounded"

              >

                Edit

              </Link>



              <DeleteButton id={tool.id} />


            </div>


          </div>


        ))}


      </div>


    </main>

  );

}

