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
     },
     {
  name: "OpenRouter",
  slug: "openrouter",
  category: "AI Platform",
  description: "Platform providing access to multiple AI models through one API.",
  image: "/tools/openrouter.png",
  rating: 4.4,
  pricing: "Free + Paid",
  website: "https://openrouter.ai",
  features: "Multiple AI models, API access",
  pros: "Many models in one place",
  cons: "Technical setup required",
  bestFor: "Developers",
  alternatives: "Hugging Face"
},

{
  name: "Stable Diffusion",
  slug: "stable-diffusion",
  category: "AI Image Generator",
  description: "Open-source AI image generation model.",
  image: "/tools/stable-diffusion.png",
  rating: 4.5,
  pricing: "Free",
  website: "https://stability.ai",
  features: "Image generation, customization",
  pros: "Open source",
  cons: "Requires setup",
  bestFor: "Artists and developers",
  alternatives: "Midjourney"
},

{
  name: "Adobe Podcast AI",
  slug: "adobe-podcast-ai",
  category: "AI Audio",
  description: "AI tool for improving podcast audio quality.",
  image: "/tools/adobe-podcast.png",
  rating: 4.4,
  pricing: "Free",
  website: "https://podcast.adobe.com",
  features: "Audio enhancement",
  pros: "Easy improvement",
  cons: "Limited editing",
  bestFor: "Podcasters",
  alternatives: "ElevenLabs"
},

{
  name: "Tome AI",
  slug: "tome-ai",
  category: "AI Productivity",
  description: "AI presentation creation tool.",
  image: "/tools/tome.png",
  rating: 4.3,
  pricing: "Free + Paid",
  website: "https://tome.app",
  features: "AI presentations",
  pros: "Fast creation",
  cons: "Limited templates",
  bestFor: "Students",
  alternatives: "Gamma AI"
},

{
  name: "Writesonic",
  slug: "writesonic",
  category: "AI Writing",
  description: "AI writing assistant for blogs and marketing.",
  image: "/tools/writesonic.png",
  rating: 4.3,
  pricing: "Free + Paid",
  website: "https://writesonic.com",
  features: "Article writing, SEO content",
  pros: "Good templates",
  cons: "Quality varies",
  bestFor: "Writers",
  alternatives: "Jasper AI"
},

{
  name: "Tabnine",
  slug: "tabnine",
  category: "AI Coding",
  description: "AI coding assistant for developers.",
  image: "/tools/tabnine.png",
  rating: 4.2,
  pricing: "Free + Paid",
  website: "https://tabnine.com",
  features: "Code completion",
  pros: "Developer focused",
  cons: "Less popular",
  bestFor: "Programmers",
  alternatives: "GitHub Copilot"
},

{
  name: "Codeium",
  slug: "codeium",
  category: "AI Coding",
  description: "Free AI coding assistant.",
  image: "/tools/codeium.png",
  rating: 4.4,
  pricing: "Free",
  website: "https://codeium.com",
  features: "Code generation",
  pros: "Free usage",
  cons: "Requires extension",
  bestFor: "Students learning coding",
  alternatives: "Cursor AI"
},

{
  name: "Descript AI",
  slug: "descript-ai",
  category: "AI Video",
  description: "AI video editor with text-based editing.",
  image: "/tools/descript.png",
  rating: 4.4,
  pricing: "Free + Paid",
  website: "https://descript.com",
  features: "Video editing, transcription",
  pros: "Easy editing",
  cons: "Paid features",
  bestFor: "Creators",
  alternatives: "Runway AI"
},

{
  name: "Otter AI",
  slug: "otter-ai",
  category: "AI Productivity",
  description: "AI meeting transcription assistant.",
  image: "/tools/otter.png",
  rating: 4.3,
  pricing: "Free + Paid",
  website: "https://otter.ai",
  features: "Transcription, notes",
  pros: "Accurate notes",
  cons: "Limits on free plan",
  bestFor: "Students and teams",
  alternatives: "Notion AI"
},

{
  name: "Replit AI",
  slug: "replit-ai",
  category: "AI Coding",
  description: "AI coding assistant inside Replit.",
  image: "/tools/replit.png",
  rating: 4.4,
  pricing: "Free + Paid",
  website: "https://replit.com",
  features: "AI coding and deployment",
  pros: "Beginner friendly",
  cons: "Advanced users may need more",
  bestFor: "Students and developers",
  alternatives: "Cursor AI"
},
{
  name: "Poe AI",
  slug: "poe-ai",
  category: "AI Assistant",
  description: "AI platform that provides access to multiple AI chatbots and models.",
  image: "/tools/poe.png",
  rating: 4.4,
  pricing: "Free + Paid",
  website: "https://poe.com",
  features: "Multiple AI models, chatbot creation",
  pros: "Many AI models in one place",
  cons: "Some models require paid plan",
  bestFor: "Students and AI users",
  alternatives: "ChatGPT, Claude"
},

{
  name: "Pi AI",
  slug: "pi-ai",
  category: "AI Assistant",
  description: "Personal AI assistant designed for conversations and helpful advice.",
  image: "/tools/pi-ai.png",
  rating: 4.3,
  pricing: "Free",
  website: "https://pi.ai",
  features: "Conversational AI, personal assistant",
  pros: "Natural conversations",
  cons: "Less powerful for coding",
  bestFor: "General users",
  alternatives: "ChatGPT, Claude"
},

{
  name: "You.com AI",
  slug: "you-com-ai",
  category: "AI Search",
  description: "AI search engine combining web search with artificial intelligence.",
  image: "/tools/you-ai.png",
  rating: 4.2,
  pricing: "Free + Paid",
  website: "https://you.com",
  features: "AI search, chat, research",
  pros: "Search-focused AI",
  cons: "Smaller ecosystem",
  bestFor: "Research and students",
  alternatives: "Perplexity AI"
},

{
  name: "Phind AI",
  slug: "phind-ai",
  category: "AI Coding",
  description: "AI search assistant built for developers and programming questions.",
  image: "/tools/phind.png",
  rating: 4.4,
  pricing: "Free",
  website: "https://phind.com",
  features: "Coding answers, developer search",
  pros: "Good programming explanations",
  cons: "Mostly developer focused",
  bestFor: "Programmers",
  alternatives: "GitHub Copilot"
},

{
  name: "Amazon Q Developer",
  slug: "amazon-q-developer",
  category: "AI Coding",
  description: "AI coding assistant from Amazon for software development.",
  image: "/tools/amazon-q.png",
  rating: 4.3,
  pricing: "Free + Paid",
  website: "https://aws.amazon.com/q/developer/",
  features: "Code generation, debugging",
  pros: "AWS integration",
  cons: "Best with AWS ecosystem",
  bestFor: "Developers",
  alternatives: "GitHub Copilot"
},
{
  name: "DALL-E",
  slug: "dall-e-ai",
  category: "AI Image Generator",
  description: "DALL-E is an AI image generation tool that creates images from text prompts.",
  image: "/tools/dall-e.png",
  rating: 4.7,
  pricing: "Paid",
  website: "https://openai.com/dall-e",
  features: "Text to image generation, image editing",
  pros: "High quality AI images",
  cons: "Limited free usage",
  bestFor: "Creators and designers",
  alternatives: "Midjourney, Leonardo AI, Stable Diffusion"
},
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

