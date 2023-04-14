/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "service.mnetplus.world",
      "event.mnetplus.world",
      "img.youtube.com",
      "i.ytimg.com",
    ],
  },
};

module.exports = nextConfig;
