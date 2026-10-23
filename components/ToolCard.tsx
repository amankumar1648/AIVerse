import Link from "next/link";
import Image from "next/image";

interface ToolCardProps {
  tool: {
    id: number;
    name: string;
    slug: string;
    category: string;
    description: string;
    image: string;
    rating: number;
    pricing: string;
  };
}

export default function ToolCard({ tool }: ToolCardProps) {

  return (

    <div className="border rounded-2xl p-5 hover:shadow-xl transition bg-white">


      <div className="flex items-center gap-4 mb-4">


        <div className="w-14 h-14 rounded-xl overflow-hidden border">


          <Image

            src={tool.image || "/tools/default.png"}

            alt={tool.name}

            width={56}

            height={56}

            className="object-cover"

          />


        </div>


        <div>

          <h2 className="text-xl font-bold">

            {tool.name}

          </h2>


          <p className="text-sm text-gray-500">

            {tool.category}

          </p>


        </div>


      </div>



      <p className="text-gray-600 mb-4">

        {tool.description}

      </p>



      <div className="flex justify-between items-center mb-4">


        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

          {tool.pricing}

        </span>



        <span className="font-semibold">

          ⭐ {tool.rating}

        </span>


      </div>




      <Link

        href={`/tools/${tool.slug}`}

        className="block text-center bg-black text-white rounded-xl py-2 hover:opacity-80"

      >

        View Tool

      </Link>



    </div>

  );

}

