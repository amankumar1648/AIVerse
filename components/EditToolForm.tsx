"use client";

import { useState } from "react";


export default function EditToolForm({tool}:any){


  const [name,setName]=useState(tool.name);

  const [category,setCategory]=useState(tool.category);

  const [description,setDescription]=useState(tool.description);

  const [website,setWebsite]=useState(tool.website);

  const [message,setMessage]=useState("");



  async function updateTool(e:React.FormEvent){

    e.preventDefault();


    const res=await fetch("/api/admin/tools",{

      method:"PUT",

      headers:{

        "Content-Type":"application/json",

      },

      body:JSON.stringify({

        id:tool.id,

        name,

        category,

        description,

        website,

      }),

    });



    if(res.ok){

      setMessage("Tool updated successfully ✅");

    }


  }



  return (

    <form onSubmit={updateTool} className="space-y-4 max-w-xl">


      <input

        value={name}

        onChange={(e)=>setName(e.target.value)}

        className="border p-3 w-full rounded"

      />


      <input

        value={category}

        onChange={(e)=>setCategory(e.target.value)}

        className="border p-3 w-full rounded"

      />


      <textarea

        value={description}

        onChange={(e)=>setDescription(e.target.value)}

        className="border p-3 w-full rounded"

      />


      <input

        value={website}

        onChange={(e)=>setWebsite(e.target.value)}

        className="border p-3 w-full rounded"

      />


      <button className="bg-blue-600 text-white px-5 py-3 rounded">

        Update Tool

      </button>


      <p>{message}</p>


    </form>

  );

}

