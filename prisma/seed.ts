import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.tool.deleteMany();

  await prisma.tool.createMany({
    data: [
      {
        name: "ChatGPT",
        slug: "chatgpt",
        category: "AI Assistant",
        description: "AI assistant for writing, coding, learning and productivity.",
        image: "/tools/chatgpt.png",
        rating: 4.8,
        pricing: "Free + Paid",
        website: "https://chat.openai.com",
        features: "AI chat, coding, writing",
        pros: "Powerful and versatile",
        cons: "Paid features available",
        bestFor: "Students and professionals",
        alternatives: "Claude, Gemini"
      },

      {
        name: "Claude",
        slug: "claude",
        category: "AI Assistant",
        description: "AI assistant for reasoning and writing.",
        image: "/tools/claude.png",
        rating: 4.7,
        pricing: "Free + Paid",
        website: "https://claude.ai",
        features: "Writing, coding, analysis",
        pros: "Excellent reasoning",
        cons: "Usage limits",
        bestFor: "Researchers and writers",
        alternatives: "ChatGPT"
      },

      {
        name: "Gemini",
        slug: "gemini",
        category: "AI Assistant",
        description: "Google AI assistant.",
        image: "/tools/gemini.png",
        rating: 4.6,
        pricing: "Free + Paid",
        website: "https://gemini.google.com",
        features: "Search, writing, research",
        pros: "Google integration",
        cons: "Variable results",
        bestFor: "Students",
        alternatives: "ChatGPT"
      },

      {
        name: "Midjourney",
        slug: "midjourney",
        category: "AI Image Generator",
        description: "AI image generation tool.",
        image: "/tools/midjourney.png",
        rating: 4.7,
        pricing: "Paid",
        website: "https://midjourney.com",
        features: "AI art generation",
        pros: "High quality images",
        cons: "Paid only",
        bestFor: "Designers",
        alternatives: "Leonardo AI"
      },

      {
        name: "GitHub Copilot",
        slug: "github-copilot",
        category: "AI Coding",
        description: "AI coding assistant.",
        image: "/tools/github-copilot.png",
        rating: 4.6,
        pricing: "Paid",
        website: "https://github.com/features/copilot",
        features: "Code completion",
        pros: "Developer productivity",
        cons: "Subscription required",
        bestFor: "Developers",
        alternatives: "Cursor AI"
      },

      {
        name: "Perplexity AI",
        slug: "perplexity-ai",
        category: "AI Search",
        description: "AI search engine with answers and sources.",
        image: "/tools/perplexity.png",
        rating: 4.6,
        pricing: "Free + Paid",
        website: "https://perplexity.ai",
        features: "AI search",
        pros: "Good citations",
        cons: "Usage limits",
        bestFor: "Students",
        alternatives: "ChatGPT"
      },

      {
        name: "Microsoft Copilot",
        slug: "microsoft-copilot",
        category: "AI Assistant",
        description: "Microsoft AI assistant.",
        image: "/tools/copilot.png",
        rating: 4.5,
        pricing: "Free + Paid",
        website: "https://copilot.microsoft.com",
        features: "Productivity AI",
        pros: "Microsoft integration",
        cons: "Account required",
        bestFor: "Office users",
        alternatives: "ChatGPT"
      },

      {
        name: "Cursor AI",
        slug: "cursor-ai",
        category: "AI Coding",
        description: "AI powered code editor.",
        image: "/tools/cursor.png",
        rating: 4.5,
        pricing: "Free + Paid",
        website: "https://cursor.com",
        features: "AI coding",
        pros: "Great workflow",
        cons: "Learning curve",
        bestFor: "Programmers",
        alternatives: "GitHub Copilot"
      },

      {
        name: "Notion AI",
        slug: "notion-ai",
        category: "AI Productivity",
        description: "AI features inside Notion.",
        image: "/tools/notion.png",
        rating: 4.4,
        pricing: "Paid",
        website: "https://notion.so",
        features: "Notes and productivity",
        pros: "Organization",
        cons: "Paid plan",
        bestFor: "Students",
        alternatives: "ChatGPT"
      },

      {
        name: "Canva AI",
        slug: "canva-ai",
        category: "AI Design",
        description: "AI design assistant.",
        image: "/tools/canva.png",
        rating: 4.5,
        pricing: "Free + Paid",
        website: "https://canva.com",
        features: "AI designs",
        pros: "Easy to use",
        cons: "Limited control",
        bestFor: "Creators",
        alternatives: "Firefly"
      },

      {
        name: "ElevenLabs",
        slug: "elevenlabs",
        category: "AI Voice",
        description: "AI voice generator.",
        image: "/tools/elevenlabs.png",
        rating: 4.6,
        pricing: "Free + Paid",
        website: "https://elevenlabs.io",
        features: "Voice generation",
        pros: "Realistic voices",
        cons: "Credit limits",
        bestFor: "Creators",
        alternatives: "Murf AI"
      },

      {
        name: "Runway AI",
        slug: "runway-ai",
        category: "AI Video",
        description: "AI video generation tool.",
        image: "/tools/runway.png",
        rating: 4.5,
        pricing: "Free + Paid",
        website: "https://runwayml.com",
        features: "AI video editing",
        pros: "Professional results",
        cons: "Expensive",
        bestFor: "Video creators",
        alternatives: "Pika AI"
      },

      {
        name: "DeepSeek",
        slug: "deepseek",
        category: "AI Assistant",
        description: "AI reasoning and coding model.",
        image: "/tools/default.png",
        rating: 4.4,
        pricing: "Free",
        website: "https://deepseek.com",
        features: "Reasoning and coding",
        pros: "Powerful free AI",
        cons: "New platform",
        bestFor: "Developers",
        alternatives: "ChatGPT"
      },

      {
        name: "Leonardo AI",
        slug: "leonardo-ai",
        category: "AI Image Generator",
        description: "AI image creation platform.",
        image: "/tools/leonardo.png",
        rating: 4.5,
        pricing: "Free + Paid",
        website: "https://leonardo.ai",
        features: "AI images",
        pros: "Creative control",
        cons: "Credits",
        bestFor: "Artists",
        alternatives: "Midjourney"
      },

      {
        name: "Grammarly AI",
        slug: "grammarly-ai",
        category: "AI Writing",
        description: "AI writing assistant.",
        image: "/tools/default.png",
        rating: 4.4,
        pricing: "Free + Paid",
        website: "https://grammarly.com",
        features: "Grammar checking",
        pros: "Easy editing",
        cons: "Premium features",
        bestFor: "Students",
        alternatives: "QuillBot"
      },

      {
        name: "QuillBot",
        slug: "quillbot",
        category: "AI Writing",
        description: "AI paraphrasing tool.",
        image: "/tools/default.png",
        rating: 4.3,
        pricing: "Free + Paid",
        website: "https://quillbot.com",
        features: "Paraphrasing",
        pros: "Good rewriting",
        cons: "Limits",
        bestFor: "Students",
        alternatives: "Grammarly"
      },

      {
        name: "Pika AI",
        slug: "pika-ai",
        category: "AI Video",
        description: "AI video creator.",
        image: "/tools/default.png",
        rating: 4.3,
        pricing: "Free + Paid",
        website: "https://pika.art",
        features: "Video generation",
        pros: "Simple",
        cons: "Credits",
        bestFor: "Creators",
        alternatives: "Runway"
      },

      {
        name: "Suno AI",
        slug: "suno-ai",
        category: "AI Music",
        description: "AI music generator.",
        image: "/tools/default.png",
        rating: 4.5,
        pricing: "Free + Paid",
        website: "https://suno.com",
        features: "Music creation",
        pros: "Fast generation",
        cons: "Limited control",
        bestFor: "Musicians",
        alternatives: "Udio"
      },

      {
        name: "Udio AI",
        slug: "udio-ai",
        category: "AI Music",
        description: "AI music creation platform.",
        image: "/tools/default.png",
        rating: 4.4,
        pricing: "Free + Paid",
        website: "https://udio.com",
        features: "Music generation",
        pros: "Quality audio",
        cons: "Credits",
        bestFor: "Creators",
        alternatives: "Suno"
      },

      {
        name: "Adobe Firefly",
        slug: "adobe-firefly",
        category: "AI Design",
        description: "Adobe AI design tool.",
        image: "/tools/default.png",
        rating: 4.5,
        pricing: "Free + Paid",
        website: "https://firefly.adobe.com",
        features: "AI design",
        pros: "Adobe integration",
        cons: "Account needed",
        bestFor: "Designers",
        alternatives: "Canva AI"
      }

    ]
  });

  console.log("20 AI tools added!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });

