import ToolCard from "./ToolCard";


export default function FeaturedTools({tools}: any) {


  return (

    <section>


      <h2 className="text-3xl font-bold mb-6">

        Featured AI Tools

      </h2>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


        {tools?.map((tool:any)=>(


          <ToolCard

            key={tool.id}

            tool={tool}

          />


        ))}


      </div>


    </section>

  );

}

