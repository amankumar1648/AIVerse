import Link from "next/link";


interface ToolCardProps {

  tool: {

    id:number;

    name:string;

    slug:string;

    category:string;

    description:string;

    image:string;

    rating:number;

    pricing:string;

  };

}



export default function ToolCard({tool}:ToolCardProps){


  return (

    <div className="border rounded-2xl p-5 hover:shadow-lg transition">


      {tool.image && (

        <img

          src={tool.image}

          alt={tool.name}

          className="w-full h-48 object-cover rounded-xl mb-4"

        />

      )}



      <h2 className="text-2xl font-bold mb-2">

        {tool.name}

      </h2>



      <div className="flex gap-2 flex-wrap mb-3">


        <span className="border px-3 py-1 rounded-full text-sm">

          ⭐ {tool.rating}

        </span>



        <span className="border px-3 py-1 rounded-full text-sm">

          {tool.category}

        </span>



        <span className="border px-3 py-1 rounded-full text-sm">

          {tool.pricing}

        </span>


      </div>



      <p className="text-gray-600 line-clamp-3 mb-5">

        {tool.description}

      </p>



      <Link

        href={`/tools/${tool.slug}`}

        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-xl"

      >

        View Tool →

      </Link>


    </div>

  );

}

