import Link from "next/link";

export const metadata = {
  title: "About AIVerse - AI Tools Directory",
  description:
    "Learn about AIVerse, an AI tools directory helping students, developers, creators and professionals discover useful AI tools.",
};

export default function AboutPage() {
  return (
    <main className="container-custom py-16">
      <section className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-6">
          About AIVerse
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          AIVerse is an AI tools directory created to help people discover,
          compare and explore useful artificial intelligence tools for
          learning, productivity, coding, creativity and professional work.
        </p>


        <div className="space-y-8">

          <section>
            <h2 className="text-3xl font-bold mb-3">
              Our Mission
            </h2>

            <p className="text-gray-700">
              Our mission is to make AI technology easier to understand and
              accessible to everyone. We organize AI tools with useful
              information so users can quickly find solutions that match
              their needs.
            </p>
          </section>


          <section>
            <h2 className="text-3xl font-bold mb-3">
              What You Can Discover on AIVerse
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                AI assistants for students and professionals
              </li>

              <li>
                AI coding and developer tools
              </li>

              <li>
                AI image, video and design tools
              </li>

              <li>
                AI writing and productivity tools
              </li>

              <li>
                Creative AI platforms and automation tools
              </li>
            </ul>
          </section>


          <section>
            <h2 className="text-3xl font-bold mb-3">
              How We Organize AI Tools
            </h2>

            <p className="text-gray-700">
              AIVerse organizes tools based on categories, features, pricing
              information and usefulness. Our goal is to provide clear
              information that helps users make better decisions.
            </p>
          </section>


          <section>
            <h2 className="text-3xl font-bold mb-3">
              Transparency
            </h2>

            <p className="text-gray-700">
              AIVerse provides information about AI tools for educational
              and discovery purposes. Tool details may change over time, so
              users should always verify information from the official tool
              websites before making decisions.
            </p>
          </section>


          <section>
            <h2 className="text-3xl font-bold mb-3">
              Why AIVerse?
            </h2>

            <p className="text-gray-700">
              With new AI products launching regularly, finding the right
              tool can be challenging. AIVerse helps simplify discovery by
              bringing useful AI tools together in one organized directory.
            </p>
          </section>


          <section>
            <h2 className="text-3xl font-bold mb-3">
              Contact Us
            </h2>

            <p className="text-gray-700">
              Have suggestions or want to recommend an AI tool? We would
              love to hear from you.
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

