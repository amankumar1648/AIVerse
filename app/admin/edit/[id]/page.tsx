import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditToolForm from "@/components/EditToolForm";


interface PageProps {

  params: Promise<{

    id:string;

  }>;

}



export default async function EditToolPage({params}:PageProps){


  const {id}=await params;



  const tool = await prisma.tool.findUnique({

    where:{

      id:Number(id),

    },

  });



  if(!tool){

    notFound();

  }



  return (

    <main className="p-8">


      <h1 className="text-3xl font-bold mb-6">

        Edit {tool.name}

      </h1>



      <EditToolForm tool={tool}/>


    </main>

  );

}

