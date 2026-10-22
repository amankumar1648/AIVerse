export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import ToolCard from "@/components/ToolCard";

export default async function FavoritesPage() {


  const cookieStore = await cookies();

  const session = cookieStore.get("session");


  if (!session) {

    return (

      <main className="min-h-screen p-8">

        <h1 className="text-3xl font-bold">
          Please login to view favorites
        </h1>

      </main>

    );

  }


  const userId = Number(session.value);


  const favorites = await prisma.favorite.findMany({

    where:{
      userId,
    },

    include:{
      tool:true,
    },

  });


  return (

    <main className="container-custom py-12">


      <h1 className="text-4xl font-bold mb-8">
        My Favorite AI Tools ⭐
      </h1>


      {favorites.length === 0 ? (

        <p className="text-gray-600">
          No favorite tools yet.
        </p>

      ) : (

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {favorites.map((favorite)=>(

            <ToolCard
              key={favorite.id}
              tool={favorite.tool}
            />

          ))}


        </div>

      )}


    </main>

  );

}

