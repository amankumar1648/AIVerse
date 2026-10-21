"use client";

import { useRouter } from "next/navigation";


export default function DeleteButton({id}:{id:number}) {


  const router = useRouter();



  async function deleteTool(){


    const confirmDelete = confirm(

      "Are you sure you want to delete this tool?"

    );


    if(!confirmDelete){

      return;

    }



    await fetch("/api/admin/tools",{

      method:"DELETE",

      headers:{

        "Content-Type":"application/json",

      },


      body:JSON.stringify({

        id,

      }),

    });



    router.refresh();


  }



  return (

    <button

      onClick={deleteTool}

      className="bg-red-600 text-white px-4 py-2 rounded"

    >

      Delete

    </button>

  );

}

