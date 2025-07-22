/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // ✅ You can enable SWC minifier if you want further optimization
  swcMinify: true,
};

module.exports = nextConfig;
