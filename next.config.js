/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/my-portifolio',
  assetPrefix: '/my-portifolio',
}

module.exports = nextConfig 