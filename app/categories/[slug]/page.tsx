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
    .replaceAll("-", " ")
    .replace(/\bai\b/gi, "AI")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const tools = await prisma.tool.findMany({
    where: {
      category: {
        equals: categoryName,
        mode: "insensitive",
      },
    },
  });

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        {categoryName} AI Tools
      </h1>

      {tools.length === 0 && (
        <p className="text-gray-500">
          No tools found in this category.
        </p>
      )}

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

