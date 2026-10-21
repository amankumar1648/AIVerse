import { prisma } from "@/lib/prisma";
import ToolCard from "@/components/ToolCard";

export default async function ToolsPage() {

  const tools = await prisma.tool.findMany();


  return (
    <main className="container-custom py-12">

      <h1 className="text-4xl font-bold mb-8">
        All AI Tools
      </h1>


      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {tools.map((tool) => (

<ToolCard

  key={tool.id}

  tool={tool}

/>
        ))}

      </div>


    </main>
  );
}


