import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "socialbloom.io",
        pathname: "/brand-assets/**",
      },
    ],
  },
};

export default nextConfig;
