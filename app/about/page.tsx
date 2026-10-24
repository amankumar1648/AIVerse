import Link from "next/link";

export const metadata = {
  title: "About AIVerse - AI Tools Directory",
  description:
    "Learn about AIVerse, a platform that helps users discover the best AI tools for productivity, learning, coding, design and creativity.",
};


export default function AboutPage() {

  return (

    <main className="container-custom py-16">

      <section className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-6">
          About AIVerse
        </h1>


        <p className="text-lg text-gray-600 mb-8">
          AIVerse is an AI tools directory built to help students,
          developers, creators and professionals discover the best
          artificial intelligence tools in one place.
        </p>


        <div className="space-y-8">


          <section>

            <h2 className="text-3xl font-bold mb-3">
              Our Mission
            </h2>

            <p className="text-gray-700">
              Our mission is to make AI technology easier to discover
              and use. We organize useful AI tools by categories,
              ratings and features so users can find the right tools
              quickly.
            </p>

          </section>



          <section>

            <h2 className="text-3xl font-bold mb-3">
              What You Can Find on AIVerse
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">

              <li>
                AI assistants for learning and productivity
              </li>

              <li>
                AI coding tools for developers
              </li>

              <li>
                AI image and video generation tools
              </li>

              <li>
                AI writing and creativity tools
              </li>

            </ul>

          </section>



          <section>

            <h2 className="text-3xl font-bold mb-3">
              Why AIVerse?
            </h2>

            <p className="text-gray-700">
              With thousands of AI tools available today, choosing
              the right one can be difficult. AIVerse helps simplify
              this process by providing organized information about
              popular and useful AI tools.
            </p>

          </section>



          <section>

            <h2 className="text-3xl font-bold mb-3">
              Contact Us
            </h2>

            <p className="text-gray-700">
              Have suggestions or want to recommend an AI tool?
              We would love to hear from you.
            </p>


            <Link
              href="/contact"
              className="inline-block mt-5 bg-black text-white px-6 py-3 rounded-xl"
            >
              Contact AIVerse →
            </Link>

          </section>


        </div>


      </section>

    </main>

  );
}

