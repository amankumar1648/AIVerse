export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import ToolCard from "@/components/ToolCard";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const tools = await prisma.tool.findMany({
    where: {
      category: categoryName,
    },
  });

  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        {categoryName} AI Tools
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
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

