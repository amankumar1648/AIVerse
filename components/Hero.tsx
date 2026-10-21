import Link from "next/link";


export default function Hero() {


  return (

    <section className="py-20 px-6">


      <div className="max-w-5xl mx-auto text-center">


        <h1 className="text-5xl font-bold mb-6">

          Discover the Best AI Tools 🚀

        </h1>



        <p className="text-xl text-gray-600 mb-8">

          Explore AI tools for writing, images, coding, video,
          marketing and productivity.

        </p>



        <div className="flex justify-center gap-4 flex-wrap">


          <Link

            href="/tools"

            className="bg-blue-600 text-white px-6 py-3 rounded-xl"

          >

            Explore Tools →

          </Link>



          <Link

            href="/submit"

            className="border px-6 py-3 rounded-xl"

          >

            Submit Your Tool

          </Link>


        </div>


      </div>


    </section>

  );

}


