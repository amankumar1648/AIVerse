"use client";

import { useEffect, useState } from "react";

export default function SubmissionList() {

  const [submissions, setSubmissions] = useState<any[]>([]);


  async function loadSubmissions() {
    const res = await fetch("/api/submit");
    const data = await res.json();
    setSubmissions(data);
  }


  useEffect(() => {
    loadSubmissions();
  }, []);


  async function approveSubmission(id:number) {

    await fetch("/api/submit", {
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        id:id
      }),
    });

    loadSubmissions();
  }


  async function rejectSubmission(id:number) {

    await fetch("/api/submit", {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        id:id
      }),
    });

    loadSubmissions();
  }



  return (
    <div>

      <h2 className="text-2xl font-bold mb-5">
        Tool Submissions
      </h2>


      {submissions.map((item)=>(
        <div 
          key={item.id}
          className="border rounded-lg p-4 mb-4"
        >

          <h3 className="text-lg font-bold">
            {item.name}
          </h3>

          <p>
            Category: {item.category}
          </p>

          <p>
            Status: {item.status}
          </p>


          <button
            onClick={() => approveSubmission(item.id)}
            className="bg-green-600 text-white px-4 py-2 rounded mr-3"
          >
            Approve
          </button>


          <button
            onClick={() => rejectSubmission(item.id)}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Reject
          </button>


        </div>
      ))}


    </div>
  );
}

