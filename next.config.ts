import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/Match-Analysis" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/Match-Analysis/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
