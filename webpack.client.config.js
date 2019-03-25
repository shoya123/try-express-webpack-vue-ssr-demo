const baseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(baseConfig, {
  entry: path.join(__dirname, 'src/entry-client.js')
});