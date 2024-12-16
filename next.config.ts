import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  remotePatterns: [
    {
      protocol: "https",
      hostname: "www.youtube.com",
      port: "",
      pathname: "/**",
    }
  ]
};

export default nextConfig;
