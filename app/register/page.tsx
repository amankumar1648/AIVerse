"use client";

import { useState } from "react";


export default function RegisterPage() {


  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [message,setMessage] = useState("");



  async function handleRegister(e:React.FormEvent){

    e.preventDefault();


    const res = await fetch("/api/register",{

      method:"POST",

      headers:{
        "Content-Type":"application/json",
      },

      body:JSON.stringify({

        email,

        password,

      }),

    });



    const data = await res.json();


    if(res.ok){

      setMessage("Registration successful");

    }else{

      setMessage(data.error || "Registration failed");

    }


  }



  return (

    <main className="min-h-screen flex items-center justify-center p-8">


      <form

        onSubmit={handleRegister}

        className="border rounded-xl p-8 w-full max-w-md"

      >


        <h1 className="text-3xl font-bold mb-6">

          Create Account

        </h1>



        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          className="w-full border p-3 rounded mb-4"

          required

        />



        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          className="w-full border p-3 rounded mb-4"

          required

        />



        <button

          className="w-full bg-blue-600 text-white p-3 rounded"

        >

          Register

        </button>



        <p className="mt-4">

          {message}

        </p>


      </form>


    </main>

  );

}

