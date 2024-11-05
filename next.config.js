/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ignores ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
