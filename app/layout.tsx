import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://aiverse2.netlify.app"),
  title: "AIVerse - AI Tools Directory",
  description: "Discover the best AI tools, software and resources.",
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

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2843472685921581"
          crossOrigin="anonymous"
        ></script>


        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-63YMW7XM5D"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-63YMW7XM5D');
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

