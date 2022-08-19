const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = withPWA(nextConfig);
