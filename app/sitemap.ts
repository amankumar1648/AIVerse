import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const tools = await prisma.tool.findMany();


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

