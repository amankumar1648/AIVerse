export const metadata = {
  title: "Contact AIVerse - Get in Touch",
  description:
    "Contact AIVerse for questions, feedback, and suggestions about AI tools.",
};

export default function ContactPage() {
  return (
    <main className="container-custom py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Contact AIVerse
        </h1>

        <p className="text-gray-700 text-lg leading-8">
          We welcome your questions, feedback, and suggestions.
          If you have ideas for improving AIVerse or want to suggest
          an AI tool to add to our directory, feel free to contact us.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Get in Touch
        </h2>

        <p className="text-gray-700 leading-8">
          For general inquiries, feedback, and support requests,
          please contact us through our official email address:
        </p>

        <p className="mt-4 font-semibold">
          Email: contact@aiverse.com
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Tool Suggestions
        </h2>

        <p className="text-gray-700 leading-8">
          Developers, creators, and AI enthusiasts can suggest useful
          AI tools through our submission page. We review submissions
          before adding tools to the AIVerse directory.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Response Time
        </h2>

        <p className="text-gray-700 leading-8">
          We try to review messages and suggestions as quickly as
          possible. Thank you for helping us improve AIVerse.
        </p>

      </div>
    </main>
  );
}

