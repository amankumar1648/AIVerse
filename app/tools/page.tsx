export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import ToolsExplorer from "@/components/ToolsExplorer";


export default async function ToolsPage() {


  const tools = await prisma.tool.findMany({
    orderBy:{
      rating:"desc",
    },
  });


  return (

    <main className="container-custom py-12">


      <h1 className="text-4xl font-bold mb-8">
        All AI Tools
      </h1>


      <ToolsExplorer tools={tools} />


    </main>

  );

}

