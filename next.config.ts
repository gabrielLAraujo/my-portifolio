import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Coolify: lean Docker image with the standalone Node server (.next/standalone)
  output: 'standalone',
  poweredByHeader: false,
  images: {
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
