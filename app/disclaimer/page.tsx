export const metadata = {
  title: "Disclaimer | AIVerse",
  description:
    "Disclaimer explaining information accuracy, third-party services and advertising on AIVerse.",
};

export default function DisclaimerPage() {
  return (
    <main className="container-custom py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Disclaimer
        </h1>

        <p className="text-gray-700 mb-6">
          The information provided on AIVerse is for general informational
          purposes only. We aim to provide useful information about AI tools,
          software and resources, but we do not guarantee that all information
          is always complete, accurate or up to date.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">
          AI Tool Information
        </h2>

        <p className="text-gray-700">
          AIVerse provides details about third-party AI tools including
          descriptions, features, pricing and categories. Tool features,
          availability and pricing may change at any time. Users should verify
          information from the official websites of the respective services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">
          Third-Party Links
        </h2>

        <p className="text-gray-700">
          Our website contains links to external websites and services.
          AIVerse is not responsible for the content, privacy practices or
          availability of third-party websites.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">
          Advertising and Monetization
        </h2>

        <p className="text-gray-700">
          AIVerse may display advertisements through third-party advertising
          services such as Google AdSense. These services may use cookies and
          similar technologies to provide relevant advertisements.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">
          No Professional Advice
        </h2>

        <p className="text-gray-700">
          Information available on AIVerse should not be considered professional
          advice. Users should make their own decisions before using any AI
          service or software.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3">
          Contact
        </h2>

        <p className="text-gray-700">
          If you have questions regarding this Disclaimer, please contact us
          through our Contact page.
        </p>

      </div>
    </main>
  );
}

