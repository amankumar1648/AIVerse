import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";


export default async function ProfilePage() {


  const cookieStore = await cookies();


  const session = cookieStore.get("session");



  if(!session){

    redirect("/login");

  }



  const user = await prisma.user.findUnique({

    where:{

      id:Number(session.value),

    },

    include:{

      favorites:{

        include:{

          tool:true,

        },

      },

    },

  });



  if(!user){

    redirect("/login");

  }



  return (

    <main className="min-h-screen p-8">


      <div className="max-w-3xl mx-auto">


        <h1 className="text-3xl font-bold mb-6">

          My Profile

        </h1>



        <p className="mb-8">

          Email: <b>{user.email}</b>

        </p>



        <h2 className="text-2xl font-bold mb-4">

          My Favorite AI Tools ⭐

        </h2>



        {user.favorites.length === 0 ? (

          <p>

            No favorites yet.

          </p>


        ):(


          <div className="grid gap-4">


            {user.favorites.map((fav)=>(


              <div

                key={fav.id}

                className="border rounded-xl p-4"

              >

                <h3 className="text-xl font-bold">

                  {fav.tool.name}

                </h3>


                <p>

                  {fav.tool.category}

                </p>


              </div>


            ))}


          </div>


        )}



      </div>


    </main>

  );

}

