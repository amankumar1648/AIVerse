import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,

  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
    {
      protocol: "https",
      hostname: "upload.wikimedia.org",
    },
    {
      protocol: "https",
      hostname: "www.perplexity.ai",
    },
  ],
},
};

export default nextConfig;