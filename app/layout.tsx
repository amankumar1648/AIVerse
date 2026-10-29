import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  metadataBase: new URL("https://aiverse2.netlify.app"),

  title: "AIVerse - AI Tools Directory",

  description:
    "Discover the best AI tools, software and resources.",

  verification: {
    google: "QaBfA4YZNM2IxJTzKGazbULwxG0r2xex4d18Pu4Ivvc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <head>

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AIVerse",
              "url": "https://aiverse2.netlify.app",
              "logo":
                "https://aiverse2.netlify.app/icon.svg",
              "description":
                "AIVerse is an AI tools directory helping users discover AI software and resources."
            }),
          }}
        />


        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AIVerse",
              "url": "https://aiverse2.netlify.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target":
                  "https://aiverse2.netlify.app/tools?search={search_term_string}",
                "query-input":
                  "required name=search_term_string",
              },
            }),
          }}
        />

      </head>


      <body>

        <Navbar />

        {children}

        <Footer />


        {/* Google AdSense */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2843472685921581"
          crossOrigin="anonymous"
        />


        {/* Google Analytics */}
        <Script
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-63YMW7XM5D"
        />


        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-63YMW7XM5D');
          `}
        </Script>


      </body>

    </html>
  );
}

