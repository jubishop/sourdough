import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Vercel restores .next/cache between deployments, and on 2026-11-17 a
    // restored Turbopack cache shipped stale CSS. Builds take seconds, so
    // always compile fresh.
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
