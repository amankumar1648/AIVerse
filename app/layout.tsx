import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
metadataBase: new URL("https://aiverse.com"),


  title: "AIVerse - Discover The Best AI Tools",
  description:
    "AIVerse is an AI tools directory where you can discover the best AI tools for students, developers, creators and professionals.",
  keywords: [
    "AI tools",
    "AI directory",
    "ChatGPT",
    "Claude",
    "Gemini",
    "AI software",
    "AI tools for students",
  ],
  openGraph: {
    title: "AIVerse - Discover The Best AI Tools",
    description:
      "Explore the best AI tools for productivity, coding, writing, design and more.",
    url: "https://aiverse.com",
    siteName: "AIVerse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIVerse - Discover The Best AI Tools",
    description:
      "Find the best AI tools in one place.",
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

