import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

export const dynamic = "force-dynamic";


const categoryData: Record<
  string,
  {
    title:string;
    description:string;
  }
> = {

  "ai-coding":{
    title:"Best AI Coding Tools",
    description:
    "Discover the best AI coding assistants and developer tools for programming, debugging and software development."
  },

  "ai-writing":{
    title:"Best AI Writing Tools",
    description:
    "Explore AI writing assistants for content creation, blogs, marketing and productivity."
  },

  "ai-image":{
    title:"Best AI Image Generator Tools",
    description:
    "Find AI image generation tools for creating stunning artwork and designs."
  },

  "ai-video":{
    title:"Best AI Video Tools",
    description:
    "Explore AI video generation and editing tools for creators."
  },

  "ai-assistant":{
    title:"Best AI Assistant Tools",
    description:
    "Discover powerful AI assistants for productivity and everyday tasks."
  },

};



export async function generateMetadata(
{
 params,
}:{
 params:Promise<{slug:string}>
}):Promise<Metadata>{

 const {slug}=await params;

 const category=categoryData[slug];


 return {

 title:
 category
 ? `${category.title} | AIVerse`
 : "AI Tools Category | AIVerse",

 description:
 category?.description ||
 "Explore AI tools by category on AIVerse."

 };

}




export default async function CategoryPage(
{
 params,
}:{
 params:Promise<{slug:string}>
}){


 const {slug}=await params;


 const category=categoryData[slug];


 const tools=await prisma.tool.findMany({

 where:{
 category:{
 contains:
 slug
 }
 },

 orderBy:{
 rating:"desc"
 }

 });



 const faqSchema={

 "@context":"https://schema.org",

 "@type":"FAQPage",

 mainEntity:[

 {
 "@type":"Question",
 name:`What are ${category?.title}?`,

 acceptedAnswer:{
 "@type":"Answer",
 text:category?.description
 }
 },

 {
 "@type":"Question",
 name:"How does AIVerse help find AI tools?",

 acceptedAnswer:{
 "@type":"Answer",
 text:"AIVerse helps users discover AI tools by category, rating and features."
 }

 }

 ]

 };



 return (

<main className="container-custom py-16">


<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify(faqSchema)

}}

/>



<section className="text-center mb-14">


<h1 className="text-5xl font-bold">

{category?.title || "AI Tools"}

</h1>


<p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto">

{category?.description}

</p>


</section>




<section>


<div className="grid md:grid-cols-3 gap-8">


{tools.map((tool)=>(


<Link

key={tool.id}

href={`/tools/${tool.slug}`}

className="
border
rounded-2xl
p-6
hover:shadow-xl
transition
">


<div className="relative w-20 h-20">

<Image

src={tool.image}

alt={tool.name}

fill

className="object-contain"

/>

</div>



<h2 className="text-xl font-bold mt-5">

{tool.name}

</h2>



<p className="text-gray-500">

{tool.category}

</p>


<p className="mt-3">

⭐ {tool.rating}

</p>


</Link>


))}


</div>


</section>



</main>

 );

}

