import type { NextConfig } from "next";

/**
 * - DOCKER_BUILD=1 → standalone (Dockerfile)
 * - CLOUDFLARE_BUILD=1 → static export to `out/` (Cloudflare Pages; no sharp / Workers bundle)
 */
const isDocker = process.env.DOCKER_BUILD === "1";
const isCloudflareStatic = process.env.CLOUDFLARE_BUILD === "1";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  ...(isDocker ? { output: "standalone" } : {}),
  ...(isCloudflareStatic ? { output: "export" } : {}),
};

export default nextConfig;
