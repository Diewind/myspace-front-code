/*
 * @Description: webpackPROD配置文件
 * @Author: ZYF <yanfengz.zhang@hand-china.com>
 * @Date: 2021-03-30 19:44:18
 * @Version: 0.0.1
 * @Copyright: Copyright (c) 2021, Hand
 */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'prod'
    }),
  ]
});