"use client";

import { useState } from "react";


export default function SearchBar() {


  const [query,setQuery] = useState("");

  const [results,setResults] = useState<any[]>([]);



  async function searchTools(value:string){


    setQuery(value);



    if(!value.trim()){

      setResults([]);

      return;

    }



    const res = await fetch(

      `/api/search?q=${value}`

    );



    const data = await res.json();



    setResults(data);


  }



  return (

    <div className="max-w-xl mx-auto my-8">


      <input

        value={query}

        onChange={(e)=>searchTools(e.target.value)}

        placeholder="Search AI tools..."

        className="border p-4 rounded-xl w-full"

      />



      {query && (

        <div className="mt-4 border rounded-xl p-4">


          {results.length > 0 ? (


            results.map((tool)=>(


              <div

                key={tool.id}

                className="py-3 border-b"

              >


                <h3 className="font-bold">

                  {tool.name}

                </h3>



                <p className="text-sm">

                  {tool.category}

                </p>


              </div>


            ))


          ) : (


            <p>

              No AI tools found.

            </p>


          )}


        </div>

      )}


    </div>

  );

}

