import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Local photography is used during the foundation phase.
    // Headless WordPress media hosts will be added here as remotePatterns
    // when the CMS layer lands (see docs / CLAUDE.md §36).
    remotePatterns: [],
  },
};

export default nextConfig;
