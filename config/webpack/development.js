process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const webpackConfig = require('./base');

// LiveReload should be disabled when HMR is enabled
webpackConfig.devServer.liveReload = !webpackConfig.devServer.hot
console.log(webpackConfig.devServer)

module.exports = webpackConfig;
