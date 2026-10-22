export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import AdminToolCard from "@/components/AdminToolCard";
import ApproveButton from "@/components/ApproveButton";
import RejectButton from "@/components/RejectButton";


export default async function AdminPage() {


  const tools = await prisma.tool.findMany({

    orderBy:{
      id:"desc",
    },

  });



  const submissions = await prisma.submission.findMany({

    where:{
      status:"pending",
    },

    orderBy:{
      createdAt:"desc",
    },

  });



  const users = await prisma.user.count();


  const totalTools = await prisma.tool.count();


  const pending = await prisma.submission.count({

    where:{
      status:"pending",
    },

  });



  return (

    <main className="p-8">


      <h1 className="text-4xl font-bold mb-8">

        Admin Dashboard 🚀

      </h1>




      <div className="grid md:grid-cols-3 gap-5 mb-10">


        <div className="border rounded-xl p-6">

          <h2 className="font-bold text-xl">
            👥 Users
          </h2>

          <p className="text-3xl">
            {users}
          </p>

        </div>



        <div className="border rounded-xl p-6">

          <h2 className="font-bold text-xl">
            🛠 Tools
          </h2>

          <p className="text-3xl">
            {totalTools}
          </p>

        </div>



        <div className="border rounded-xl p-6">

          <h2 className="font-bold text-xl">
            📤 Pending
          </h2>

          <p className="text-3xl">
            {pending}
          </p>

        </div>


      </div>






      <h2 className="text-3xl font-bold mb-5">

        📤 Pending Submissions

      </h2>



      <div className="grid gap-5 mb-12">


        {submissions.length === 0 && (

          <p>
            No pending submissions.
          </p>

        )}



        {submissions.map((submission)=>(


          <div

            key={submission.id}

            className="border rounded-xl p-5"

          >


            <h3 className="text-xl font-bold">

              {submission.name}

            </h3>


            <p>

              {submission.category}

            </p>


            <p className="my-2">

              {submission.description}

            </p>



            <div className="flex gap-3">


              <ApproveButton id={submission.id}/>


              <RejectButton id={submission.id}/>


            </div>


          </div>


        ))}


      </div>







      <h2 className="text-3xl font-bold mb-5">

        🛠 All AI Tools

      </h2>



      <div className="grid gap-5">


        {tools.map((tool)=>(


          <AdminToolCard

            key={tool.id}

            tool={tool}

          />


        ))}


      </div>



    </main>

  );

}

