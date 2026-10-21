import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {

  title: "AIVerse - Discover the Best AI Tools",

  description:
    "Find the best AI tools for writing, image generation, coding, video, marketing and more.",

  keywords: [
    "AI tools",
    "Artificial Intelligence",
    "ChatGPT",
    "AI directory",
  ],

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


