export const dynamic = "force-dynamic";
import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let tools: { slug: string }[] = [];

  try {
    tools = await prisma.tool.findMany({
      select: {
        slug: true,
      },
    });
  } catch (error) {
    console.log("Database unavailable during build");
  }

  return [
    {
      url: "https://aiverse.com",
      lastModified: new Date(),
    },
    {
      url: "https://aiverse.com/tools",
      lastModified: new Date(),
    },
    ...tools.map((tool) => ({
      url: `https://aiverse.com/tools/${tool.slug}`,
      lastModified: new Date(),
    })),
  ];
}

