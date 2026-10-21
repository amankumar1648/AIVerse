import { prisma } from "@/lib/prisma";
import ApproveButton from "@/components/ApproveButton";
import RejectButton from "@/components/RejectButton";

export default async function SubmissionsPage() {


  const submissions = await prisma.submission.findMany({

    where: {

      status: "pending",

    },

  });



  return (

    <main className="p-8">


      <h1 className="text-3xl font-bold mb-6">

        Pending Submissions

      </h1>



      <div className="grid gap-5">


        {submissions.map((submission) => (


          <div

            key={submission.id}

            className="border rounded-xl p-5"

          >


            <h2 className="text-xl font-bold">

              {submission.name}

            </h2>



            <p className="mt-2">

              Category: {submission.category}

            </p>



            <p className="my-3">

              {submission.description}

            </p>



            <div className="flex gap-3">


              <ApproveButton id={submission.id} />
              <RejectButton id={submission.id} />

            </div>


          </div>


        ))}


      </div>


    </main>

  );

}


