import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,

  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: "/tools/cursor",
        destination: "/tools/cursor-ai",
        permanent: true,
      },
      {
        source: "/tools/perplexity",
        destination: "/tools/perplexity-ai",
        permanent: true,
      },
      {
        source: "/tools/runway",
        destination: "/tools/runway-ai",
        permanent: true,
      },
      {
        source: "/tools/canva",
        destination: "/tools/canva-ai",
        permanent: true,
      },
      {
        source: "/tools/gemini",
        destination: "/tools/gemini",
        permanent: true,
      },
      {
        source: "/tools/chatgpt",
        destination: "/tools/chatgpt",
        permanent: true,
      },
      {
        source: "/tools/claude",
        destination: "/tools/claude",
        permanent: true,
      },
      {
        source: "/tools/microsoft-copilot",
        destination: "/tools/microsoft-copilot",
        permanent: true,
      },
      {
        source: "/tools/leonardo-ai",
        destination: "/tools/leonardo-ai",
        permanent: true,
      },
      {
        source: "/tools/jasper",
        destination: "/tools/jasper-ai",
        permanent: true,
      },
      {
        source: "/tools/dall-e",
        destination: "/tools/dall-e-ai",
        permanent: true,
      },
      {
        source: "/tools/midjourney-ai",
        destination: "/tools/midjourney",
        permanent: true,
      },
      {
        source: "/tools/copilot",
        destination: "/tools/github-copilot",
        permanent: true,
      },
      {
        source: "/tools/notion",
        destination: "/tools/notion-ai",
        permanent: true,
      },
      {
        source: "/tools/eleven-labs",
        destination: "/tools/elevenlabs",
        permanent: true,
      },
      {
        source: "/tools/stable-diffusion-ai",
        destination: "/tools/stable-diffusion",
        permanent: true,
      },
      {
        source: "/tools/adobe-firefly-ai",
        destination: "/tools/adobe-firefly",
        permanent: true,
      },
      {
        source: "/tools/grammarly",
        destination: "/tools/grammarly-ai",
        permanent: true,
      },
      {
        source: "/tools/quillbot-ai",
        destination: "/tools/quillbot",
        permanent: true,
      },
      {
        source: "/tools/deepseek-ai",
        destination: "/tools/deepseek",
        permanent: true,
      },
      {
        source: "/tools/replit",
        destination: "/tools/replit-ai",
        permanent: true,
      },
      {
        source: "/tools/poe",
        destination: "/tools/poe-ai",
        permanent: true,
      },
      {
        source: "/tools/suno",
        destination: "/tools/suno-ai",
        permanent: true,
      },
      {
        source: "/tools/udio",
        destination: "/tools/udio-ai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

