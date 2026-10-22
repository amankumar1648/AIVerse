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

