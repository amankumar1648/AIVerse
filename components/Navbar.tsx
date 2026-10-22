import Link from "next/link";
import { cookies } from "next/headers";
import LogoutButton from "@/components/LogoutButton";


export default async function Navbar() {


  const cookieStore = await cookies();


  const session = cookieStore.get("session");

  const admin = cookieStore.get("admin");



  const categories = [

    "AI Assistant",
    "AI Image Generator",
    "AI Coding",
    "AI Video",
    "AI Marketing",
    "AI Education",

  ];



  return (

    <nav className="border-b p-5">

      <div className="max-w-7xl mx-auto flex items-center justify-between">


        <Link
          href="/"
          className="text-2xl font-bold"
        >

          AIVerse 🚀

        </Link>



        <div className="flex gap-5 items-center">


          <Link href="/">
            Home
          </Link>


          <Link href="/tools">
            Tools
          </Link>



          <div className="relative group">


            <button>
              Categories ▾
            </button>


            <div className="hidden group-hover:block absolute top-8 left-0 bg-white border rounded-xl p-3 w-56 z-10">


              {categories.map((category)=>(


                <Link

                  key={category}

                  href={`/categories/${category
                    .toLowerCase()
                    .replaceAll(" ","-")}`}

                  className="block p-2 hover:bg-gray-100 rounded"

                >

                  {category}

                </Link>


              ))}


            </div>


          </div>



          <Link href="/submit">
            Submit Tool
          </Link>



          {session ? (

            <>


              <Link href="/favorites">
                ⭐ Favorites
              </Link>



              <Link href="/profile">
                Profile
              </Link>



              {admin?.value === "true" && (

                <Link

                  href="/admin"

                  className="font-bold text-blue-600"

                >

                  Admin Dashboard

                </Link>

              )}



              <LogoutButton />


            </>


          ) : (


            <>


              <Link href="/register">
                Register
              </Link>


              <Link href="/login">
                Login
              </Link>


            </>


          )}



        </div>


      </div>


    </nav>

  );

}

