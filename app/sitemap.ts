import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

 let tools = [];

try {
  tools = await prisma.tool.findMany();
} catch (error) {
  console.log("Database not available during build");
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

