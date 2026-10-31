import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIVerse - Discover Best AI Tools, Reviews, Alternatives & Pricing",
  description:
    "Discover, compare and explore the best AI tools for students, developers, creators and businesses. Find AI software reviews, features, pricing and alternatives.",
  keywords: [
    "AI tools",
    "best AI tools",
    "ChatGPT alternatives",
    "AI software",
    "AI directory",
  ],
  openGraph: {
    title: "AIVerse - AI Tools Directory",
    description:
      "Explore the world's best AI tools in one place.",
    url: "https://aiverse2.netlify.app",
    siteName: "AIVerse",
    type: "website",
  },
};
export const dynamic = "force-dynamic";


export default async function Home() {

const tools = await prisma.tool.findMany({
  orderBy:{
    rating:"desc",
  },
  take:6,
});


const latestTools = await prisma.tool.findMany({
  orderBy:{
    id:"desc",
  },
  take:6,
});
const categories = [
    {
      name:"AI Assistant",
      slug:"ai-assistant",
      icon:"🤖",
    },

    {
      name:"AI Coding",
      slug:"ai-coding",
      icon:"💻",
    },

    {
      name:"AI Image Generator",
      slug:"ai-image",
      icon:"🎨",
    },

    {
      name:"AI Video",
      slug:"ai-video",
      icon:"🎬",
    },

    {
      name:"AI Writing",
      slug:"ai-writing",
      icon:"✍️",
    },

  ];



  const stats=[

    {
      number:"40+",
      text:"AI Tools",
    },

    {
      number:"10+",
      text:"Categories",
    },

    {
      number:"⭐ 5",
      text:"Rating System",
    },

    {
      number:"24/7",
      text:"AI Discovery",
    },

  ];



return (

<main>



<section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">

<div className="container-custom py-28 text-center">


<span className="inline-block bg-white/10 border border-white/20 px-6 py-2 rounded-full backdrop-blur">

🚀 Discover Next Generation AI Tools

</span>



<h1 className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight">

Discover The World's Best AI Tools

</h1>



<p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">

AIVerse helps students, developers, creators and businesses discover,

compare and use powerful AI tools for productivity, coding,

design, writing and creativity.

</p>



<div className="mt-10 max-w-2xl mx-auto">

<div className="bg-white rounded-2xl p-2 flex items-center shadow-2xl">


<input

type="text"

placeholder="Search AI tools like ChatGPT, Midjourney, Cursor..."

className="flex-1 px-5 py-4 text-black outline-none"

/>


<Link

href="/tools"

className="bg-black text-white px-6 py-4 rounded-xl"

>

Search

</Link>


</div>

</div>



<div className="mt-10 flex justify-center gap-4 flex-wrap">


<Link

href="/tools"

className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"

>

Explore AI Tools →

</Link>



<Link

href="/submit"

className="border border-white/30 px-8 py-4 rounded-xl hover:bg-white/10 transition"

>

Submit Tool

</Link>


</div>


</div>

</section>
<section className="container-custom py-12">


<div className="grid md:grid-cols-4 gap-6">


{stats.map((item)=>(

<div

key={item.text}

className="border rounded-2xl p-8 text-center"

>


<h2 className="text-4xl font-bold">

{item.number}

</h2>


<p className="text-gray-600 mt-2">

{item.text}

</p>


</div>

))}


</div>


</section>






<h2 className="text-3xl font-bold mb-8">

Explore AI Categories

</h2><section className="container-custom py-16">


<h2 className="text-3xl font-bold mb-8">

⭐ Featured AI Tools

</h2>



<div className="grid md:grid-cols-3 gap-8">


{tools.map((tool)=>(


<Link

key={tool.id}

href={`/tools/${tool.slug}`}

className="border rounded-3xl p-6 hover:shadow-2xl transition"

>


<div className="relative w-24 h-24">

<Image

src={tool.image}

alt={tool.name}

fill

className="object-contain"

/>

</div>



<h3 className="text-2xl font-bold mt-5">

{tool.name}

</h3>



<p className="text-gray-500 mt-2">

{tool.category}

</p>



<div className="mt-4 flex gap-2">


<span className="bg-yellow-100 px-3 py-1 rounded-full">

⭐ {tool.rating}

</span>



<span className="bg-green-100 px-3 py-1 rounded-full">

{tool.pricing}

</span>


</div>


</Link>


))}


</div>


</section>




<section className="container-custom py-16">

<h2 className="text-3xl font-bold mb-8">
🆕 Latest AI Tools
</h2>


<div className="grid md:grid-cols-3 gap-8">

{latestTools.map((tool)=>(

<Link

key={tool.id}

href={`/tools/${tool.slug}`}

className="border rounded-3xl p-6 hover:shadow-2xl transition"

>


<div className="relative w-20 h-20">

<Image

src={tool.image}

alt={tool.name}

fill

className="object-contain"

/>

</div>


<h3 className="text-xl font-bold mt-5">

{tool.name}

</h3>


<p className="text-gray-500 mt-2">

{tool.category}

</p>


<div className="mt-4">

<span className="bg-blue-100 px-3 py-1 rounded-full">

Explore Tool →

</span>

</div>


</Link>

))}

</div>


<div className="text-center mt-10">

<Link

href="/tools"

className="bg-black text-white px-8 py-4 rounded-xl"

>

View All AI Tools →

</Link>

</div>


</section>
<section className="container-custom py-16">


<h2 className="text-3xl font-bold mb-8">

Explore AI Categories

</h2>



<div className="grid md:grid-cols-5 gap-5">


{categories.map((category)=>(


<Link

key={category.slug}

href={`/categories/${category.slug}`}

className="border rounded-2xl p-6 text-center hover:shadow-xl transition"

>


<div className="text-5xl">

{category.icon}

</div>


<h3 className="font-bold mt-4">

{category.name}

</h3>


</Link>


))}


</div>


</section>





<section className="container-custom py-16">


<h2 className="text-3xl font-bold mb-8">

Why Choose AIVerse?

</h2>



<div className="grid md:grid-cols-3 gap-6">


<div className="border rounded-2xl p-6">

<h3 className="text-xl font-bold">

Curated Tools

</h3>

<p className="mt-3 text-gray-600">

Find useful AI tools selected for different needs.

</p>

</div>



<div className="border rounded-2xl p-6">

<h3 className="text-xl font-bold">

Easy Comparison

</h3>

<p className="mt-3 text-gray-600">

Compare tools by rating, category and pricing.

</p>

</div>



<div className="border rounded-2xl p-6">

<h3 className="text-xl font-bold">

Growing Database

</h3>

<p className="mt-3 text-gray-600">

Discover modern AI platforms in one place.

</p>

</div>


</div>


</section>




<section className="container-custom py-20">

<div className="bg-black text-white rounded-3xl p-12 text-center">


<h2 className="text-4xl font-bold">

Find The Perfect AI Tool For Your Needs

</h2>


<p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">

Explore hundreds of AI tools for coding, writing, design, productivity and creativity.

</p>


<div className="mt-8 flex justify-center gap-4 flex-wrap">


<Link

href="/tools"

className="bg-white text-black px-8 py-4 rounded-xl"

>

Explore All Tools →

</Link>


<Link

href="/submit"

className="border border-white px-8 py-4 rounded-xl"

>

Submit Your Tool

</Link>


</div>


</div>

</section>
<section className="container-custom py-16">


<h2 className="text-3xl font-bold mb-8">

Frequently Asked Questions

</h2>


<div className="space-y-5">


<div className="border rounded-xl p-6">

<h3 className="font-bold">

What is AIVerse?

</h3>

<p className="mt-2 text-gray-600">

AIVerse is an AI tools directory helping users discover and compare AI software.

</p>

</div>



<div className="border rounded-xl p-6">

<h3 className="font-bold">

Can users submit AI tools?

</h3>

<p className="mt-2 text-gray-600">

Yes, anyone can submit useful AI tools through AIVerse.

</p>

</div>


</div>


</section>



</main>

);

};

