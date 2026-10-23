import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: {
    default: "AIVerse - Discover the Best AI Tools",
    template: "%s | AIVerse",
  },

  description:
    "AIVerse is an AI tools directory where you can discover the best AI tools for writing, coding, images, video, marketing and productivity.",

  keywords: [
    "AI tools",
    "AI directory",
    "best AI tools",
    "ChatGPT alternatives",
    "AI writing tools",
    "AI image generators",
    "AI coding tools",
  ],

  metadataBase: new URL(
    "https://aiverse2.netlify.app"
  ),

  openGraph: {
    title: "AIVerse - Discover the Best AI Tools",
    description:
      "Discover powerful AI tools for writing, coding, images, videos and productivity.",
    type: "website",
    siteName: "AIVerse",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AIVerse AI Tools Directory",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AIVerse - Discover the Best AI Tools",
    description:
      "Find and explore the best AI tools in one place.",
    images: [
      "/opengraph-image",
    ],
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

      <body>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AIVerse",
              "url": "https://aiverse2.netlify.app",
              "description":
                "Discover the best AI tools for writing, coding, images, video and productivity.",
            }),
          }}
        />

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>
  );
}

