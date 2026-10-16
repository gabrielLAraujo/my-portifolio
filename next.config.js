/** @type {import('next').NextConfig} */
const nextConfig = {
  // Coolify: imagem Docker enxuta com o servidor Node gerado pelo Next (.next/standalone)
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 