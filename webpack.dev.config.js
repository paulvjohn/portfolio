var baseConfig = require('./webpack.config');

baseConfig.watch = true;
baseConfig.watchDelay = 600;
baseConfig.cache = true;
baseConfig.debug = true;
baseConfig.devtool = 'eval';
baseConfig.devtool = '#inline-source-map';

module.exports = baseConfig;
