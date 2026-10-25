export const metadata = {
  title: "About AIVerse - AI Tools Directory",
  description:
    "Learn about AIVerse, a platform that helps users discover and compare the best AI tools.",
};

export default function AboutPage() {
  return (
    <main className="container-custom py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          About AIVerse
        </h1>

        <p className="text-gray-700 text-lg leading-8">
          AIVerse is an AI tools directory created to help students,
          developers, creators, and professionals discover useful
          artificial intelligence tools in one place.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-4">
          Our Mission
        </h2>

        <p className="text-gray-700 leading-8">
          Our mission is to make AI discovery simple by organizing
          AI tools based on categories, features, pricing, and use cases.
          We help users find tools for productivity, coding, design,
          writing, research, and creativity.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-4">
          How We Review Tools
        </h2>

        <p className="text-gray-700 leading-8">
          AIVerse provides information about AI platforms including
          features, pricing details, and common use cases. Users should
          always visit official websites of AI providers for the latest
          information about pricing and availability.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-4">
          Transparency
        </h2>

        <p className="text-gray-700 leading-8">
          We aim to provide helpful and accurate information about AI
          tools. Our goal is to help users compare available options
          and choose tools that match their needs.
        </p>

      </div>
    </main>
  );
}

