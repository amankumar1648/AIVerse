"use client";

import { useState } from "react";
import ToolCard from "@/components/ToolCard";

interface Props {
  tools: any[];
}

export default function ToolsExplorer({ tools }: Props) {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("rating");


  const categories = [
    "All",
    ...Array.from(
      new Set(tools.map((tool) => tool.category))
    ),
  ];


  let filteredTools = tools.filter((tool) => {

    const matchesSearch =
      tool.name
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesCategory =
      category === "All" ||
      tool.category === category;


    return matchesSearch && matchesCategory;

  });


  filteredTools = [...filteredTools].sort((a,b)=>{

    if(sort === "rating"){
      return b.rating - a.rating;
    }


    if(sort === "name"){
      return a.name.localeCompare(b.name);
    }


    if(sort === "newest"){
      return b.id - a.id;
    }


    return 0;

  });


  return (

    <div>


      <div className="flex flex-col md:flex-row gap-4 mb-8">


        <input
          placeholder="Search AI tools..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="border rounded-xl px-4 py-3 flex-1"
        />


        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="border rounded-xl px-4 py-3"
        >

          {categories.map((cat)=>(
            <option key={cat}>
              {cat}
            </option>
          ))}

        </select>


        <select
          value={sort}
          onChange={(e)=>setSort(e.target.value)}
          className="border rounded-xl px-4 py-3"
        >

          <option value="rating">
            Highest Rated
          </option>

          <option value="name">
            Name A-Z
          </option>

          <option value="newest">
            Newest
          </option>

        </select>


      </div>


      {filteredTools.length === 0 ? (

        <div className="text-center py-16">

          <h2 className="text-2xl font-bold">
            No AI tools found
          </h2>

          <p className="text-gray-600 mt-2">
            Try another search or category.
          </p>

        </div>


      ) : (


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {filteredTools.map((tool)=>(

            <ToolCard
              key={tool.id}
              tool={tool}
            />

          ))}


        </div>


      )}


    </div>

  );
}

