const path = require('path');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const baseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');


module.exports = merge(baseConfig, {
  entry: path.join(__dirname, './src/entry-server.js'),
  target: 'node',
  output: {
    // filename: 'server-bundle.js',
    libraryTarget: 'commonjs2' // よくわからん
  },
  plugins: [
    new VueSSRServerPlugin()
  ]
});

