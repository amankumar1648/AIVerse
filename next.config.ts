import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,

  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: "/tools/canva",
        destination: "/tools/canva-ai",
        permanent: true,
      },
      {
        source: "/tools/cursor",
        destination: "/tools/cursor-ai",
        permanent: true,
      },
      {
        source: "/tools/runway",
        destination: "/tools/runway-ai",
        permanent: true,
      },
      {
        source: "/tools/perplexity",
        destination: "/tools/perplexity-ai",
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
    ];
  },
};

export default nextConfig;

