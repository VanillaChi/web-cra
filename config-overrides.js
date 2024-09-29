const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@src': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@store': path.resolve(__dirname, 'src/store'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@lib': path.resolve(__dirname, 'src/lib'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  }
  return config;
};
