import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  /* config options here */
  images: {
    domains: ["github.com", "static.vecteezy.com"],
  },
};

export default nextConfig;
