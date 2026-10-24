import Link from "next/link";

export const metadata = {
  title: "Contact AIVerse - Get In Touch",
  description:
    "Contact AIVerse for feedback, AI tool suggestions, corrections and questions.",
};

export default function ContactPage() {
  return (
    <main className="container-custom py-16">
      <section className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-6">
          Contact AIVerse
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Have feedback, suggestions, or an AI tool recommendation?
          Contact AIVerse and help us improve our AI tools directory.
        </p>


        <div className="space-y-8">

          <div className="border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-3">
              Suggest an AI Tool
            </h2>

            <p className="text-gray-700 mb-5">
              Know an AI tool that should be featured on AIVerse?
              Submit it for review and we will evaluate it before adding
              it to the directory.
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
              Feedback & Corrections
            </h2>

            <p className="text-gray-700">
              If you find outdated information, incorrect details, or
              have ideas to improve AIVerse, please let us know.
              We appreciate user feedback.
            </p>
          </div>


          <div className="border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-3">
              Get In Touch
            </h2>

            <p className="text-gray-700">
              For general questions and suggestions, contact us through
              our official communication channel.
            </p>

            <p className="font-semibold mt-3">
              Email: contact@aiverse.com
            </p>
          </div>


          <div className="border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-3">
              Response Time
            </h2>

            <p className="text-gray-700">
              We try to review messages and suggestions as soon as
              possible.
            </p>
          </div>


        </div>

      </section>
    </main>
  );
}

