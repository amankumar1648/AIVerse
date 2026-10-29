export const dynamic = "force-dynamic";

import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = "https://aiverse2.netlify.app";

  const tools = await prisma.tool.findMany({
    select: {
      slug: true,
    },
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
    },

    ...tools.map((tool) => ({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: new Date(),
    })),
  ];
}

