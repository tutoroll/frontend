import type { NextConfig } from "next";

const remoteOrigins = (process.env.NEXT_IMAGE_REMOTE_ORIGINS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: remoteOrigins.map((origin) => {
      const url = new URL(origin);
      return {
        protocol: url.protocol.replace(":", "") as "http" | "https",
        hostname: url.hostname,
        ...(url.port ? { port: url.port } : {}),
      };
    }),
  },
};

export default nextConfig;
