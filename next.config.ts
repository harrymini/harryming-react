import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	// Next.js 옵션
	reactStrictMode: true,
	// ...etc.

	webpack: (config) => {
		config.resolve.alias["@"] = path.resolve(__dirname, "src");
		return config;
	},
};

export default nextConfig;
