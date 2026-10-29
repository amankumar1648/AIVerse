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

    <div className="grid md:grid-cols-4 gap-4 mb-10">

      <input
      placeholder="🔍 Search AI tools..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="border rounded-xl p-3"
      />


      <select
      className="border rounded-xl p-3"
      value={category}
      onChange={(e)=>setCategory(e.target.value)}
      >
        {categories.map(c=>(
          <option key={c}>{c}</option>
        ))}
      </select>


      <select
      className="border rounded-xl p-3"
      value={pricing}
      onChange={(e)=>setPricing(e.target.value)}
      >
        {pricings.map(p=>(
          <option key={p}>{p}</option>
        ))}
      </select>


      <select
      className="border rounded-xl p-3"
      value={sort}
      onChange={(e)=>setSort(e.target.value)}
      >
        <option value="rating">
          Highest Rating
        </option>

        <option value="name">
          A-Z
        </option>

      </select>

    </div>



    <div className="grid md:grid-cols-3 gap-8">

    {filtered.map((tool)=>(

      <Link
      key={tool.id}
      href={`/tools/${tool.slug}`}
      className="border rounded-2xl p-6 hover:shadow-xl transition"
      >

      <div className="relative w-20 h-20 mb-5">
        <Image
        src={tool.image}
        alt={tool.name}
        fill
        className="object-contain"
        />
      </div>


      <h3 className="text-xl font-bold">
        {tool.name}
      </h3>


      <p className="text-gray-500">
        {tool.category}
      </p>


      <p>
        ⭐ {tool.rating}
      </p>


      <p className="text-gray-600 mt-3">
        {tool.description}
      </p>


      </Link>

    ))}

    </div>

    </>
  );
}

