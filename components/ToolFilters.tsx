"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Tool = {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  pricing: string;
};

export default function ToolFilters({ tools }: { tools: Tool[] }) {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [pricing, setPricing] = useState("All");
  const [sort, setSort] = useState("rating");


  const categories = [
    "All",
    ...Array.from(new Set(tools.map((t)=>t.category)))
  ];


  const pricings = [
    "All",
    ...Array.from(new Set(tools.map((t)=>t.pricing)))
  ];


  let filtered = tools.filter((tool)=>{

    const matchSearch =
      tool.name.toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category==="All" ||
      tool.category===category;

    const matchPricing =
      pricing==="All" ||
      tool.pricing===pricing;


    return matchSearch && matchCategory && matchPricing;

  });



  if(sort==="rating"){
    filtered.sort((a,b)=>b.rating-a.rating);
  }


  if(sort==="name"){
    filtered.sort((a,b)=>a.name.localeCompare(b.name));
  }



  return (

    <>

    {/* Filters */}

    <div className="grid md:grid-cols-4 gap-4 mb-12">

      <input

      placeholder="🔍 Search AI tools..."

      value={search}

      onChange={(e)=>setSearch(e.target.value)}

      className="border rounded-xl p-4 shadow-sm focus:ring-2 focus:ring-black"

      />


      <select

      className="border rounded-xl p-4"

      value={category}

      onChange={(e)=>setCategory(e.target.value)}

      >

        {categories.map(c=>(

          <option key={c}>
            {c}
          </option>

        ))}

      </select>



      <select

      className="border rounded-xl p-4"

      value={pricing}

      onChange={(e)=>setPricing(e.target.value)}

      >

        {pricings.map(p=>(

          <option key={p}>
            {p}
          </option>

        ))}

      </select>



      <select

      className="border rounded-xl p-4"

      value={sort}

      onChange={(e)=>setSort(e.target.value)}

      >

        <option value="rating">
          ⭐ Highest Rated
        </option>

        <option value="name">
          A-Z
        </option>

      </select>


    </div>



    {/* Tool Cards */}


    <div className="grid md:grid-cols-3 gap-8">


    {filtered.map((tool)=>(


      <Link

      key={tool.id}

      href={`/tools/${tool.slug}`}

      className="
      group
      rounded-3xl
      border
      bg-white
      p-6
      shadow-sm
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      ">


        <div className="flex justify-between items-start">


          <div className="relative w-20 h-20">

            <Image

            src={tool.image}

            alt={tool.name}

            fill

            className="object-contain"

            />

          </div>


          <span className="text-sm bg-yellow-100 px-3 py-1 rounded-full">

            ⭐ {tool.rating}

          </span>


        </div>



        <h3 className="text-2xl font-bold mt-5 group-hover:text-blue-600">

          {tool.name}

        </h3>



        <div className="flex gap-2 mt-3">


          <span className="text-xs bg-blue-100 px-3 py-1 rounded-full">

            {tool.category}

          </span>


          <span className="text-xs bg-green-100 px-3 py-1 rounded-full">

            {tool.pricing}

          </span>


        </div>



        <p className="text-gray-600 mt-4 line-clamp-3">

          {tool.description}

        </p>



        <div className="mt-6 text-blue-600 font-semibold">

          View Tool →

        </div>



      </Link>


    ))}


    </div>


    </>

  );

}

