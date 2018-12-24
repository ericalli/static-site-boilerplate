const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './../src',
    watchContentBase: true,
    hot: true,
    open: true,
    port: process.env.PORT || 8000,
    host: process.env.HOST || 'localhost',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
