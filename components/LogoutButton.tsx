"use client";

import { useRouter } from "next/navigation";


export default function LogoutButton() {


  const router = useRouter();



  async function handleLogout() {


    await fetch("/api/logout", {

      method: "POST",

    });



    router.replace("/");

    router.refresh();


  }



  return (

    <button

      onClick={handleLogout}

      className="border px-4 py-2 rounded-lg hover:bg-gray-100"

    >

      Logout

    </button>

  );

}

