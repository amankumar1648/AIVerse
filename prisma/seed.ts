import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
await prisma.tool.createMany({
  skipDuplicates: true,
    data: [
     {
  name: "Perplexity",
  slug: "perplexity",
  category: "AI Assistant",
  description: "AI search engine that provides answers with sources and citations.",
  image: "/tools/perplexity.png",
  rating: 4.7,
  pricing: "Free + Paid",
  website: "https://perplexity.ai",
},
      {
        name: "ChatGPT",
        slug: "chatgpt",
        category: "AI Assistant",
        description: "AI chatbot for writing, coding, learning and productivity.",
        image: "/tools/chatgpt.png",
        rating: 4.8,
        pricing: "Free + Paid",
        website: "https://chat.openai.com",
      },
      {
        name: "Midjourney",
        slug: "midjourney",
        category: "AI Image Generator",
        description: "Creates high-quality AI images from text prompts.",
        image: "/tools/midjourney.png",
        rating: 4.7,
        pricing: "Paid",
        website: "https://midjourney.com",
      },
      {
        name: "Claude",
        slug: "claude",
        category: "AI Assistant",
        description: "AI assistant for writing, analysis and coding.",
        image: "/tools/claude.png",
        rating: 4.6,
        pricing: "Free + Paid",
        website: "https://claude.ai",
      },
{
  name: "Gemini",
  slug: "gemini",
  category: "AI Assistant",
  description: "Google AI assistant for writing, research and productivity.",
  image: "/tools/gemini.png",
  rating: 4.7,
  pricing: "Free + Paid",
  website: "https://gemini.google.com",
},

{
  name: "Microsoft Copilot",
  slug: "microsoft-copilot",
  category: "AI Assistant",
  description: "AI assistant integrated with Microsoft products.",
  image: "/tools/copilot.png",
  rating: 4.5,
  pricing: "Free + Paid",
  website: "https://copilot.microsoft.com",
},

{
  name: "DALL-E",
  slug: "dall-e",
  category: "AI Image Generator",
  description: "AI image generation tool by OpenAI.",
  image: "/tools/dalle.png",
  rating: 4.6,
  pricing: "Paid",
  website: "https://openai.com/dall-e",
},

{
  name: "Leonardo AI",
  slug: "leonardo-ai",
  category: "AI Image Generator",
  description: "AI platform for creating images and creative designs.",
  image: "/tools/leonardo.png",
  rating: 4.5,
  pricing: "Free + Paid",
  website: "https://leonardo.ai",
},

{
  name: "GitHub Copilot",
  slug: "github-copilot",
  category: "AI Coding",
  description: "AI coding assistant for developers.",
  image: "/tools/github-copilot.png",
  rating: 4.8,
  pricing: "Paid",
  website: "https://github.com/features/copilot",
},

{
  name: "Cursor",
  slug: "cursor",
  category: "AI Coding",
  description: "AI-powered code editor for developers.",
  image: "/tools/cursor.png",
  rating: 4.7,
  pricing: "Free + Paid",
  website: "https://cursor.com",
},

{
  name: "Runway",
  slug: "runway",
  category: "AI Video",
  description: "AI video generation and editing platform.",
  image: "/tools/runway.png",
  rating: 4.5,
  pricing: "Free + Paid",
  website: "https://runwayml.com",
},

{
  name: "Jasper AI",
  slug: "jasper-ai",
  category: "AI Marketing",
  description: "AI writing and marketing content platform.",
  image: "/tools/jasper.png",
  rating: 4.4,
  pricing: "Paid",
  website: "https://jasper.ai",
},
    ],
  });

  console.log("Tools added successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


