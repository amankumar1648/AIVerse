"use client";

import { useState } from "react";


export default function FavoriteButton({toolId}:{toolId:number}) {


  const [message,setMessage] = useState("");



  async function addFavorite(){


    const res = await fetch("/api/favorite",{

      method:"POST",

      headers:{

        "Content-Type":"application/json",

      },

      body:JSON.stringify({

        toolId,

      }),

    });



    const data = await res.json();


    setMessage(data.message || data.error);


  }



  return (

    <div className="mt-6">


      <button

        onClick={addFavorite}

        className="border px-6 py-3 rounded-xl"

      >

        ⭐ Favorite

      </button>



      <p className="mt-2 text-sm">

        {message}

      </p>


    </div>

  );

}

