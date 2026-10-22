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
    "AIVerse is an AI tools directory where you can discover the best AI tools for writing, coding, images, videos, marketing, productivity and more.",

  keywords: [
    "AI tools",
    "AI directory",
    "best AI tools",
    "ChatGPT alternatives",
    "AI writing tools",
    "AI image generators",
    "AI coding tools",
    "Artificial Intelligence",
  ],

  metadataBase: new URL("https://verdant-gumdrop-064c5b.netlify.app"),

  openGraph: {
    title: "AIVerse - Discover the Best AI Tools",
    description:
      "Discover powerful AI tools for writing, coding, images, videos and productivity.",
    type: "website",
    siteName: "AIVerse",
  },

  twitter: {
    card: "summary_large_image",
    title: "AIVerse - Discover the Best AI Tools",
    description:
      "Find and explore the best AI tools in one place.",
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


        <Navbar />


        {children}


        <Footer />


      </body>

    </html>

  );

}

