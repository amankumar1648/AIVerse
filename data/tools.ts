export interface Tool {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  pricing: "Free" | "Freemium" | "Paid";
  website: string;
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "ChatGPT",
    slug: "chatgpt",
    category: "AI Chatbot",
    description: "AI assistant for writing, coding and productivity.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    rating: 4.9,
    pricing: "Freemium",
    website: "https://chat.openai.com",
  },
  {
    id: 2,
    name: "Claude",
    slug: "claude",
    category: "AI Assistant",
    description: "Powerful AI assistant for documents and reasoning.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    rating: 4.8,
    pricing: "Freemium",
    website: "https://claude.ai",
  },
  {
    id: 3,
    name: "Gemini",
    slug: "gemini",
    category: "AI Search",
    description: "Google's multimodal AI assistant.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    rating: 4.8,
    pricing: "Free",
    website: "https://gemini.google.com",
  },
  {
    id: 4,
    name: "Cursor",
    slug: "cursor",
    category: "AI Coding",
    description: "AI-powered code editor for developers.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
    rating: 4.9,
    pricing: "Freemium",
    website: "https://cursor.com",
  },
  {
    id: 5,
    name: "Midjourney",
    slug: "midjourney",
    category: "AI Image",
    description: "Generate stunning AI artwork from text prompts.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    rating: 4.9,
    pricing: "Paid",
    website: "https://www.midjourney.com",
  },
  {
    id: 6,
    name: "Perplexity",
    slug: "perplexity",
    category: "AI Search",
    description: "AI-powered search with cited answers.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    rating: 4.7,
    pricing: "Freemium",
    website: "https://www.perplexity.ai",
  },
];