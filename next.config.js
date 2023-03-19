/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["openweathermap.org", "images.unsplash.com"],
  },
};
