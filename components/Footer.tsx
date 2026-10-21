import Link from "next/link";


export default function Footer(){


  return (

    <footer className="border-t mt-20 p-8">


      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">


        <div>

          <h2 className="text-xl font-bold">

            AIVerse 🚀

          </h2>

          <p className="mt-2 text-gray-600">

            Discover the best AI tools in one place.

          </p>

        </div>



        <div>

          <h3 className="font-bold">

            Explore

          </h3>


          <Link href="/tools">

            Tools

          </Link>


        </div>



        <div>

          <h3 className="font-bold">

            Company

          </h3>


          <Link href="/about">

            About

          </Link>


          <br />

          <Link href="/contact">

            Contact

          </Link>


        </div>



        <div>

          <h3 className="font-bold">

            Legal

          </h3>


          <Link href="/privacy">

            Privacy

          </Link>


          <br />


          <Link href="/terms">

            Terms

          </Link>


        </div>


      </div>



      <p className="text-center mt-8 text-gray-500">

        © {new Date().getFullYear()} AIVerse. All rights reserved.

      </p>


    </footer>

  );

}

