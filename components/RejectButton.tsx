"use client";

import { useRouter } from "next/navigation";


export default function RejectButton({id}:{id:number}) {


  const router = useRouter();



  async function reject(){


    await fetch("/api/admin/submissions",{

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

      onClick={reject}

      className="bg-red-600 text-white px-4 py-2 rounded"

    >

      Reject ❌

    </button>

  );

}

