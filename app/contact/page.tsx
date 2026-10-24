import Link from "next/link";

export const metadata = {
  title: "Contact AIVerse - Get In Touch",
  description:
    "Contact AIVerse for suggestions, feedback, AI tool recommendations or questions.",
};


export default function ContactPage() {

  return (

    <main className="container-custom py-16">

      <section className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-6">
          Contact AIVerse
        </h1>


        <p className="text-lg text-gray-600 mb-10">
          Have a suggestion, feedback, or want to recommend an AI tool?
          We would love to hear from you.
        </p>



        <div className="space-y-8">


          <div className="border rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-3">
              Suggest an AI Tool
            </h2>

            <p className="text-gray-700 mb-5">
              If you know an AI tool that should be listed on AIVerse,
              you can submit it for review.
            </p>


            <Link
              href="/submit"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl"
            >
              Submit AI Tool →
            </Link>

          </div>



          <div className="border rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-3">
              Feedback & Questions
            </h2>

            <p className="text-gray-700">
              We value your feedback. If you find incorrect information
              or have ideas to improve AIVerse, please reach out to us.
            </p>

          </div>



          <div className="border rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-3">
              Email
            </h2>

            <p className="text-gray-700">
              Contact us at:
            </p>

            <p className="font-semibold mt-2">
              contact@aiverse.com
            </p>

          </div>


        </div>


      </section>


    </main>

  );
}

