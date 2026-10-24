import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiverse2.netlify.app"),

  title: {
    default: "AIVerse - Discover The Best AI Tools",
    template: "%s | AIVerse",
  },

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
    url: "https://aiverse2.netlify.app",
    siteName: "AIVerse",
    type: "website",
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

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2843472685921581"
          crossOrigin="anonymous"
        ></script>


        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PQMC196H4C"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PQMC196H4C');
            `,
          }}
        />

      </head>

      <body>
        <Navbar />

        {children}

        <Footer />
      </body>

    </html>
  );
}

