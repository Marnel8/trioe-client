import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.youtube.com",
        port: "",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
