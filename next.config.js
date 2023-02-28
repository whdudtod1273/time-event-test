/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "https://whdudtod1273.github.io/time-event-test/" : "",
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};

module.exports = nextConfig;
