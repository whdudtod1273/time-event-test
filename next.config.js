/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "https://whdudtod1273.github.io/time-event-test/" : "",
  reactStrictMode: true,
};

module.exports = nextConfig;
