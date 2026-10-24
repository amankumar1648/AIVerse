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

  const baseUrl = "https://aiverse2.netlify.app";

  const staticPages = [
    "",
    "/tools",
    "/categories",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/blog",
  ];

  const blogPages = [
    "/blog/best-ai-tools-for-students-2026",
    "/blog/chatgpt-vs-gemini-vs-claude-2026",
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
    })),

    ...blogPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
    })),

    ...tools.map((tool) => ({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: new Date(),
    })),
  ];
}

