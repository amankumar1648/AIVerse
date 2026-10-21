"use client";

import { useState } from "react";


export default function LoginPage() {


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");




  async function handleLogin(e: React.FormEvent) {

    e.preventDefault();


    const res = await fetch("/api/login", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({

        email,

        password,

      }),

    });



    const data = await res.json();


    if(res.ok){

      setMessage("Login successful");

    } else {

      setMessage(data.error || "Login failed");

    }


  }




  return (

    <main className="min-h-screen flex items-center justify-center p-8">


      <form

        onSubmit={handleLogin}

        className="border rounded-xl p-8 w-full max-w-md"

      >


        <h1 className="text-3xl font-bold mb-6">

          Login

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

          Login

        </button>



        <p className="mt-4">

          {message}

        </p>


      </form>


    </main>

  );

}

