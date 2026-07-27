import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/ark-simplify-construction-landing/:path*",
        destination: "/construction-estimating/:path*",
        permanent: true,
      },
      {
        source: "/ark-simplify-finance-landing/:path*",
        destination: "/finance-experts/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
