/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  hostname: "openweathermap.org",
  images: {
    domains: ["openweathermap.org"],
  },
};

module.exports = nextConfig
