"use client";

import { useRouter } from "next/navigation";

export default function ApproveButton({id}:{id:number}) {

  const router = useRouter();


  async function approve(){

    await fetch("/api/admin/submissions",{

      method:"POST",

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

      onClick={approve}

      className="bg-green-600 text-white px-4 py-2 rounded"

    >

      Approve ✅

    </button>

  );

}

