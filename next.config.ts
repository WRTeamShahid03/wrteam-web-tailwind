/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["backend.wrteam.in", "s3.envato.com", "placehold.co"], // Add any other domains you need to load images from
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.wrteam.in",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "s3.envato.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "**",
      },
    ],
  },
  htmlLimitedBots: ".*",
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    // ... existing code ...
  },
};

module.exports = nextConfig;
