import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: ["three"],
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "5000",
				pathname: "/uploads/**",
			},
			{
				protocol: "https",
				hostname: "trioe-server.onrender.com",
				port: "",
				pathname: "/uploads/**",
			},
			{
				protocol: "https",
				hostname: "www.youtube.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
