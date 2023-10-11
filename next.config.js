// next.config.js
const { i18n } = require('./next-i18next.config');
module.exports = {
  reactStrictMode: true,
  i18n,
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
  },
  images: {
    domains: ['ngs.com.vn', '172.16.50.206'],
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
  async exportPathMap(defaultPathMap) {
    const excludeAdminPages = path => path.startsWith('/admin');

    const filteredPathMap = Object.keys(defaultPathMap).reduce((acc, path) => {
      if (!excludeAdminPages(path)) {
        acc[path] = defaultPathMap[path];
      }
      return acc;
    }, {});

    return filteredPathMap;
  },
};
