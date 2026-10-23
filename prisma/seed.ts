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
        description: "ChatGPT is an AI assistant for writing, coding, learning and productivity.",
        image: "/tools/chatgpt.png",
        rating: 4.8,
        pricing: "Free + Paid",
        website: "https://chat.openai.com",
        features: "AI chat, coding help, writing, image generation, research",
        pros: "Easy to use, powerful AI models, many use cases",
        cons: "Advanced features require paid plan",
        bestFor: "Students, developers, writers and professionals",
        alternatives: "Claude, Gemini, Microsoft Copilot"
      },


      {
        name: "Claude",
        slug: "claude",
        category: "AI Assistant",
        description: "Claude is an AI assistant focused on reasoning, writing and analysis.",
        image: "/tools/claude.png",
        rating: 4.7,
        pricing: "Free + Paid",
        website: "https://claude.ai",
        features: "Long documents, coding, analysis, writing",
        pros: "Excellent reasoning and natural writing",
        cons: "Some features have usage limits",
        bestFor: "Researchers, writers and developers",
        alternatives: "ChatGPT, Gemini"
      },


      {
        name: "Midjourney",
        slug: "midjourney",
        category: "AI Image Generator",
        description: "Midjourney creates high quality AI generated images.",
        image: "/tools/midjourney.png",
        rating: 4.7,
        pricing: "Paid",
        website: "https://midjourney.com",
        features: "AI art, realistic images, creative designs",
        pros: "Very high quality images",
        cons: "Requires subscription",
        bestFor: "Designers and creators",
        alternatives: "DALL-E, Leonardo AI"
      },


      {
        name: "Gemini",
        slug: "gemini",
        category: "AI Assistant",
        description: "Google Gemini is an AI assistant for search, writing and productivity.",
        image: "/tools/gemini.png",
        rating: 4.6,
        pricing: "Free + Paid",
        website: "https://gemini.google.com",
        features: "AI chat, Google integration, research",
        pros: "Strong Google ecosystem integration",
        cons: "Responses can vary",
        bestFor: "Students and Google users",
        alternatives: "ChatGPT, Claude"
      },


      {
        name: "GitHub Copilot",
        slug: "github-copilot",
        category: "AI Coding",
        description: "AI coding assistant that helps developers write code faster.",
        image: "/tools/github-copilot.png",
        rating: 4.6,
        pricing: "Paid",
        website: "https://github.com/features/copilot",
        features: "Code completion, debugging, suggestions",
        pros: "Improves developer productivity",
        cons: "Requires subscription",
        bestFor: "Software developers",
        alternatives: "Cursor, Codeium"
      }

    ]

  });


  console.log("Tools added successfully!");

}


main()
.catch((e)=>{
  console.error(e);
})
.finally(async()=>{
  await prisma.$disconnect();
});

