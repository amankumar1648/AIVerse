"use client";

import { useState } from "react";


export default function SubmitPage() {


  const [image, setImage] = useState("");

  const [rating, setRating] = useState("");

  const [message, setMessage] = useState("");

  const [imageError, setImageError] = useState(false);



  async function submitTool(e: React.FormEvent<HTMLFormElement>) {


    e.preventDefault();


    const form = e.currentTarget;


    const ratingNumber = Number(rating);



    if (ratingNumber < 0 || ratingNumber > 5) {

      setMessage("❌ Rating must be between 0 and 5");

      return;

    }



    const data = {


      name: (form.elements.namedItem("name") as HTMLInputElement).value,


      slug: (form.elements.namedItem("slug") as HTMLInputElement).value,


      category: (form.elements.namedItem("category") as HTMLSelectElement).value,


      description: (form.elements.namedItem("description") as HTMLTextAreaElement).value,


      image,


      rating: ratingNumber,


      pricing: (form.elements.namedItem("pricing") as HTMLInputElement).value,


      website: (form.elements.namedItem("website") as HTMLInputElement).value,


    };



    const res = await fetch("/api/submit", {


      method: "POST",


      headers: {

        "Content-Type": "application/json",

      },


      body: JSON.stringify(data),


    });



    if (res.ok) {


      setMessage("✅ Submitted! Waiting for admin approval.");


      form.reset();

      setImage("");

      setRating("");

      setImageError(false);


    } else {


      setMessage("❌ Submission failed");


    }


  }




  return (


    <main className="min-h-screen p-8">


      <div className="max-w-xl mx-auto">


        <h1 className="text-4xl font-bold mb-6">

          Submit AI Tool 🚀

        </h1>



        <form

          onSubmit={submitTool}

          className="space-y-4"

        >



          <input

            name="name"

            placeholder="Tool Name"

            className="border p-3 w-full rounded"

            required

          />



          <input

            name="slug"

            placeholder="Slug"

            className="border p-3 w-full rounded"

            required

          />



          <select

            name="category"

            className="border p-3 w-full rounded"

          >

            <option>AI Assistant</option>

            <option>Image</option>

            <option>Video</option>

            <option>Coding</option>

            <option>Marketing</option>

            <option>Education</option>


          </select>




          <textarea

            name="description"

            placeholder="Description"

            className="border p-3 w-full rounded"

            required

          />




          <input

            placeholder="Image URL"

            value={image}

            onChange={(e)=>{

              setImage(e.target.value);

              setImageError(false);

            }}

            className="border p-3 w-full rounded"

          />




          {image && (

            <div className="mt-3">


              {!imageError ? (

                <img

                  src={image}

                  alt="Preview"

                  onError={()=>setImageError(true)}

                  className="w-32 h-32 object-contain rounded border"

                />


              ) : (


                <p className="text-red-500">

                  ❌ Invalid image URL

                </p>


              )}


            </div>


          )}




          <input

            placeholder="Rating (0-5)"

            type="number"

            step="0.1"

            value={rating}

            onChange={(e)=>setRating(e.target.value)}

            className="border p-3 w-full rounded"

          />




          <input

            name="pricing"

            placeholder="Free / Paid"

            className="border p-3 w-full rounded"

          />




          <input

            name="website"

            placeholder="Website URL"

            className="border p-3 w-full rounded"

            required

          />




          <button

            className="bg-blue-600 text-white px-6 py-3 rounded-xl"

          >

            Submit Tool

          </button>



        </form>




        <p className="mt-4">

          {message}

        </p>



      </div>


    </main>


  );

}

