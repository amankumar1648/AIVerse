import Link from "next/link";


export default function Footer(){

  return (

    <footer className="border-t mt-20 p-8">


      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">


        <div>

          <h2 className="text-xl font-bold">
            AIVerse 🚀
          </h2>

          <p className="mt-3 text-gray-600 leading-7">

            Discover and explore the best AI tools
            for productivity, creativity and innovation.

          </p>

        </div>




        <div>

          <h3 className="font-bold mb-3">
            Explore
          </h3>


          <div className="space-y-2 flex flex-col">

            <Link href="/tools">
              AI Tools
            </Link>

            <Link href="/categories">
              Categories
            </Link>

            <Link href="/submit">
              Submit Tool
            </Link>

          </div>


        </div>




        <div>

          <h3 className="font-bold mb-3">
            Company
          </h3>


          <div className="space-y-2 flex flex-col">

            <Link href="/about">
              About
            </Link>

            <Link href="/contact">
              Contact
            </Link>

          </div>


        </div>




        <div>

          <h3 className="font-bold mb-3">
            Legal
          </h3>


          <div className="space-y-2 flex flex-col">

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>

          </div>


        </div>




        <div>

          <h3 className="font-bold mb-3">
            Disclaimer
          </h3>


          <p className="text-gray-600 text-sm leading-6">

            AIVerse provides AI tool information
            for discovery purposes. Always verify
            details from official websites.

          </p>


        </div>


      </div>




      <p className="text-center mt-10 text-gray-500">

        © {new Date().getFullYear()} AIVerse.
        All rights reserved.

      </p>


    </footer>

  );

}

