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
        description: "Google AI assistant for research and productivity.",
        image: "/tools/gemini.png",
        rating: 4.7,
        pricing: "Free + Paid",
        website: "https://gemini.google.com",
      },

      {
        name: "Midjourney",
        slug: "midjourney",
        category: "AI Image Generator",
        description: "AI image generation tool creating high quality artwork.",
        image: "/tools/midjourney.png",
        rating: 4.7,
        pricing: "Paid",
        website: "https://midjourney.com",
      },

      {
        name: "DALL-E",
        slug: "dall-e",
        category: "AI Image Generator",
        description: "AI image generator by OpenAI.",
        image: "/tools/dalle.png",
        rating: 4.6,
        pricing: "Paid",
        website: "https://openai.com/dall-e",
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
        description: "AI-powered code editor.",
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
        name: "ElevenLabs",
        slug: "elevenlabs",
        category: "AI Audio",
        description: "AI voice generation and text to speech platform.",
        image: "/tools/elevenlabs.png",
        rating: 4.7,
        pricing: "Free + Paid",
        website: "https://elevenlabs.io",
      },

      {
        name: "Canva AI",
        slug: "canva-ai",
        category: "AI Design",
        description: "AI design tools for graphics and presentations.",
        image: "/tools/canva.png",
        rating: 4.6,
        pricing: "Free + Paid",
        website: "https://canva.com",
      },

      {
        name: "Notion AI",
        slug: "notion-ai",
        category: "AI Productivity",
        description: "AI assistant for notes and productivity.",
        image: "/tools/notion.png",
        rating: 4.6,
        pricing: "Free + Paid",
        website: "https://notion.so",
      },

      {
        name: "Gamma AI",
        slug: "gamma-ai",
        category: "AI Productivity",
        description: "AI presentation and document creation tool.",
        image: "/tools/gamma.png",
        rating: 4.5,
        pricing: "Free + Paid",
        website: "https://gamma.app",
      },

    ],

  });

  console.log("Tools added successfully!");

}


main()
  .catch((error) => {

    console.error(error);
    process.exit(1);

  })
  .finally(async () => {

    await prisma.$disconnect();

  });

