const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  );

  config = {
    ...config,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@containers': path.resolve(__dirname, 'src/containers'),
      }
    }
  };

  return config;
}
