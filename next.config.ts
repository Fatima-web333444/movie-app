import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['image.tmdb.org'], // ✅ allow external images from TMDB
  },
};

export default nextConfig;
