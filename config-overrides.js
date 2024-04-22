const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'src/components'),
      data: path.resolve(__dirname, 'src/data1'),
      pages: path.resolve(__dirname, 'src/pages'),
      theme: path.resolve(__dirname, 'src/theme'),
      interfaces: path.resolve(__dirname, 'src/interfaces'),
    },
  };

  return config;
};
