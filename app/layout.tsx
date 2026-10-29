import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  metadataBase: new URL("https://aiverse2.netlify.app"),

  title: {
    default: "AIVerse - Discover the Best AI Tools Directory",
    template: "%s | AIVerse",
  },

  description:
    "Discover, compare and explore the best AI tools for productivity, coding, writing, design, education and creativity.",

  keywords: [
    "AI tools",
    "AI software",
    "best AI tools",
    "AI tools directory",
    "AI productivity tools",
    "AI coding tools",
    "AI writing tools",
    "AI image generators",
  ],

  authors: [
    {
      name: "AIVerse",
    },
  ],

  creator: "AIVerse",
  publisher: "AIVerse",

  verification: {
    google: "QaBfA4YZNM2IxJTzKGazbULwxG0r2xex4d18Pu4Ivvc",
  },

  openGraph: {
    title: "AIVerse - Discover the Best AI Tools",
    description:
      "Explore and compare AI tools for coding, writing, productivity, design and creativity.",
    url: "https://aiverse2.netlify.app",
    siteName: "AIVerse",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "AIVerse AI Tools Directory",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AIVerse - AI Tools Directory",
    description:
      "Discover the best AI tools and software in one place.",
    images: ["/icon.svg"],
  },

  robots: {
    index: true,
    follow: true,
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

