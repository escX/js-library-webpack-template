const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: './examples/src/index.js',
  output: {
    filename: 'main.js',
    libraryTarget: "window",
    library: 'utils',
    path: path.resolve(__dirname, 'examples')
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['*', '!src']
    }),
    new HtmlWebpackPlugin({
      title: 'template'
    })
  ]
});