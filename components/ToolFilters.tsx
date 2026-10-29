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
    ...Array.from(new Set(tools.map((t) => t.category)))
  ];


  const pricings = [
    "All",
    ...Array.from(new Set(tools.map((t) => t.pricing)))
  ];


  let filtered = tools.filter((tool) => {

    const matchSearch =
      tool.name.toLowerCase()
      .includes(search.toLowerCase());


    const matchCategory =
      category === "All" ||
      tool.category === category;


    const matchPricing =
      pricing === "All" ||
      tool.pricing === pricing;


    return matchSearch && matchCategory && matchPricing;

  });


  if(sort === "rating"){
    filtered.sort((a,b)=>b.rating-a.rating);
  }


  if(sort === "name"){
    filtered.sort((a,b)=>a.name.localeCompare(b.name));
  }



  return (

    <>

      <div className="grid md:grid-cols-4 gap-4 mb-10">

        <input
          placeholder="🔍 Search AI tools..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="border rounded-xl p-4 shadow-sm"
        />


        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="border rounded-xl p-4"
        >
          {categories.map((c)=>(
            <option key={c}>
              {c}
            </option>
          ))}
        </select>



        <select
          value={pricing}
          onChange={(e)=>setPricing(e.target.value)}
          className="border rounded-xl p-4"
        >
          {pricings.map((p)=>(
            <option key={p}>
              {p}
            </option>
          ))}
        </select>



        <select
          value={sort}
          onChange={(e)=>setSort(e.target.value)}
          className="border rounded-xl p-4"
        >

          <option value="rating">
            ⭐ Highest Rated
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
            "
          >


            <div className="flex justify-between items-start">


              <div className="relative w-20 h-20">

                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />

              </div>



              <span className="bg-yellow-100 px-3 py-1 rounded-full text-sm">

                ⭐ {tool.rating}

              </span>


            </div>



            <h3 className="text-2xl font-bold mt-5 group-hover:text-blue-600">

              {tool.name}

            </h3>



            <p className="text-gray-500 mt-2">

              {tool.category}

            </p>



            <p className="text-gray-600 mt-3 line-clamp-3">

              {tool.description}

            </p>



            <div className="flex justify-between items-center mt-6">


              <span className="border rounded-full px-3 py-1 text-sm">

                💰 {tool.pricing}

              </span>



              <span className="text-blue-600 font-semibold">

                Explore →

              </span>


            </div>


          </Link>


        ))}


      </div>


    </>

  );

}

