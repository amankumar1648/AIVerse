import Link from "next/link";
import Image from "next/image";

interface Tool {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  pricing: string;
}

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="border rounded-2xl p-6 bg-white shadow-sm hover:shadow-xl transition">

      <div className="flex items-center gap-4 mb-4">

        <div className="relative w-16 h-16 rounded-xl overflow-hidden border bg-gray-50">
          <Image
            src={tool.image}
            alt={tool.name}
            fill
            className="object-contain p-2"
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


      <p className="text-gray-600 mb-4 line-clamp-3">
        {tool.description}
      </p>


      <div className="flex items-center justify-between mb-5">

        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
          ⭐ {tool.rating}
        </span>


        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {tool.pricing}
        </span>

      </div>


      <Link
        href={`/tools/${tool.slug}`}
        className="block text-center bg-black text-white rounded-xl py-3 hover:bg-gray-800 transition"
      >
        View Details →
      </Link>

    </div>
  );
}

