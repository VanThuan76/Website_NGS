/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['ngs.com.vn'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['^./src/pages/admin/.*$'] = require.resolve('./src/pages/index.tsx');
    }
    if (!config.experiments) {
      config.experiments = {};
    }
    config.experiments.topLevelAwait = true;
    return config;
  },
};
module.exports = nextConfig;
