import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";


interface AdminToolCardProps {

  tool: {

    id:number;
    name:string;
    slug:string;
    category:string;
    description:string;
    image:string;
    rating:number;
    pricing:string;
    website:string;

  };

}



export default function AdminToolCard({tool}:AdminToolCardProps){


  return (

    <div className="border rounded-2xl p-5 flex gap-5 items-center">


      <div className="w-20 h-20 overflow-hidden rounded-xl border">


        {tool.image ? (

          <img

            src={tool.image}

            alt={tool.name}

            className="w-full h-full object-cover"

          />

        ) : (

          <div className="w-full h-full flex items-center justify-center bg-gray-100">

            🤖

          </div>

        )}


      </div>





      <div className="flex-1">


        <h3 className="text-xl font-bold">

          {tool.name}

        </h3>



        <p className="text-gray-500">

          {tool.category}

        </p>



        <p>

          ⭐ {tool.rating} | {tool.pricing}

        </p>



        {tool.website && (

          <a

            href={tool.website}

            target="_blank"

            className="text-blue-600"

          >

            Open Website

          </a>

        )}


      </div>





      <div className="flex gap-3">


        <Link

          href={`/admin/edit/${tool.id}`}

          className="bg-blue-600 text-white px-4 py-2 rounded"

        >

          Edit

        </Link>



        <DeleteButton id={tool.id}/>


      </div>


    </div>

  );

}

