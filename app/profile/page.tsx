import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";


export default async function ProfilePage() {


  const cookieStore = await cookies();

  const session = cookieStore.get("session");


  if (!session) {

    redirect("/login");

  }



  const user = await prisma.user.findUnique({

    where: {

      id: Number(session.value),

    },

    include: {

      favorites: {

        include: {

          tool: true,

        },

      },


      submissions: true,

    },

  });



  if (!user) {

    redirect("/login");

  }



  return (

    <main className="min-h-screen p-8">


      <div className="max-w-5xl mx-auto">


        <h1 className="text-4xl font-bold mb-6">
          My Profile 👤
        </h1>



        <div className="border rounded-xl p-6 mb-10">

          <h2 className="text-2xl font-bold">
            Account
          </h2>


          <p className="mt-3">
            Email: <b>{user.email}</b>
          </p>


        </div>




        <h2 className="text-3xl font-bold mb-6">
          ⭐ Favorite AI Tools
        </h2>



        {user.favorites.length === 0 ? (

          <p>
            No favorites yet.
          </p>


        ) : (


          <div className="grid md:grid-cols-2 gap-5 mb-12">


            {user.favorites.map((fav)=>(


              <Link
                key={fav.id}
                href={`/tools/${fav.tool.slug}`}
              >


                <div className="border rounded-xl p-5">


                  <img
                    src={fav.tool.image}
                    alt={fav.tool.name}
                    className="w-20 h-20 object-contain mb-4"
                  />


                  <h3 className="text-xl font-bold">
                    {fav.tool.name}
                  </h3>


                  <p>
                    {fav.tool.category}
                  </p>


                  <p>
                    ⭐ {fav.tool.rating}
                  </p>


                </div>


              </Link>


            ))}


          </div>


        )}




        <h2 className="text-3xl font-bold mb-6">
          📤 My Submitted Tools
        </h2>




        {user.submissions.length === 0 ? (

          <p>
            You have not submitted any tools.
          </p>


        ) : (


          <div className="grid gap-5">


            {user.submissions.map((submission)=>(


              <div
                key={submission.id}
                className="border rounded-xl p-5"
              >


                <h3 className="text-xl font-bold">
                  {submission.name}
                </h3>


                <p>
                  Category: {submission.category}
                </p>


                <p>
                  Status: {submission.status}
                </p>


              </div>


            ))}


          </div>


        )}



      </div>


    </main>

  );

}

