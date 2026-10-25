import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.tool.createMany({
    data: [
      {
        name: "Hugging Face",
        slug: "hugging-face",
        category: "AI Platform",
        description: "Platform for AI models, datasets and machine learning tools.",
        image: "/tools/huggingface.png",
        rating: 4.5,
        pricing: "Free + Paid",
        website: "https://huggingface.co",
        features: "AI models, datasets, machine learning",
        pros: "Huge AI community",
        cons: "Requires technical knowledge",
        bestFor: "Developers and researchers",
        alternatives: "OpenAI, Google AI"
      },
      {
        name: "Murf AI",
        slug: "murf-ai",
        category: "AI Voice",
        description: "AI voice generator for videos, presentations and content.",
        image: "/tools/murf.png",
        rating: 4.4,
        pricing: "Free + Paid",
        website: "https://murf.ai",
        features: "Voice generation, narration",
        pros: "Professional voices",
        cons: "Limited free usage",
        bestFor: "Creators",
        alternatives: "ElevenLabs"
      },
      {
        name: "Gamma AI",
        slug: "gamma-ai",
        category: "AI Productivity",
        description: "AI tool for creating presentations and documents.",
        image: "/tools/gamma.png",
        rating: 4.4,
        pricing: "Free + Paid",
        website: "https://gamma.app",
        features: "AI presentations, documents",
        pros: "Fast presentation creation",
        cons: "Design limitations",
        bestFor: "Students and professionals",
        alternatives: "Canva AI"
      },
      {
        name: "Jasper AI",
        slug: "jasper-ai",
        category: "AI Writing",
        description: "AI writing assistant for marketing and content creation.",
        image: "/tools/jasper.png",
        rating: 4.3,
        pricing: "Paid",
        website: "https://jasper.ai",
        features: "Content writing, marketing copy",
        pros: "Business focused",
        cons: "Expensive",
        bestFor: "Marketers",
        alternatives: "Copy.ai"
      },
      {
        name: "Copy.ai",
        slug: "copy-ai",
        category: "AI Writing",
        description: "AI writing platform for marketing content.",
        image: "/tools/copyai.png",
        rating: 4.3,
        pricing: "Free + Paid",
        website: "https://copy.ai",
        features: "Copywriting, workflows",
        pros: "Easy to use",
        cons: "Less useful for complex writing",
        bestFor: "Businesses",
        alternatives: "Jasper AI"
      }
    ],
    skipDuplicates: true
  });

  console.log("New AI tools added!");
}

main()
.catch(console.error)
.finally(async () => {
  await prisma.$disconnect();
});

