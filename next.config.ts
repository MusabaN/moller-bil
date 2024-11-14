import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: "/images/**",
      }
    ],
  },
  eslint: {
    dirs: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
  }
  /* config options here */
};

export default nextConfig;
