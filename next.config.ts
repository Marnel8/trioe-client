import type { NextConfig } from "next";
import crypto from "crypto";

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
		minimumCacheTTL: 60, // Cache images for 60 seconds minimum
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		formats: ["image/webp"],
	},
	headers: async () => {
		return [
			{
				source: "/:all*(svg|jpg|png|webp|gif)",
				locale: false,
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
					{
						key: "Expires",
						value: new Date(Date.now() + 31536000000).toUTCString(), // 1 year from now
					},
				],
			},
		];
	},
	webpack: (config, { dev, isServer }) => {
		// Bundle similar chunks together
		config.optimization.splitChunks = {
			chunks: "all",
			minSize: 20000,
			maxSize: 244000,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			cacheGroups: {
				default: false,
				vendors: false,
				framework: {
					chunks: "all",
					name: "framework",
					test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
					priority: 40,
					enforce: true,
				},
				lib: {
					test(module: any) {
						return (
							module.size() > 160000 &&
							/node_modules[/\\]/.test(module.identifier())
						);
					},
					name(module: any) {
						const hash = crypto.createHash("sha1");
						hash.update(module.identifier());
						return hash.digest("hex").substring(0, 8);
					},
					priority: 30,
					minChunks: 1,
					reuseExistingChunk: true,
				},
				commons: {
					name: "commons",
					minChunks: 2,
					priority: 20,
				},
				shared: {
					name(module: any, chunks: any) {
						return crypto
							.createHash("sha1")
							.update(
								chunks.reduce((acc: string, chunk: any) => acc + chunk.name, "")
							)
							.digest("hex");
					},
					priority: 10,
					minChunks: 2,
					reuseExistingChunk: true,
				},
			},
		};
		return config;
	},
};

export default nextConfig;
