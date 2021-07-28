/*
 * @Description: webpackDEV配置文件
 * @Author: ZYF <yanfengz.zhang@hand-china.com>
 * @Date: 2021-03-30 19:42:50
 * @Version: 0.0.1
 * @Copyright: Copyright (c) 2021, Hand
 */
const path = require('path');
const fs = require('fs');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CreateReactPublicPlugin = require('create-react-public-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL
);

const publicUrl = publicUrlOrPath;
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
  },
  output: {
    publicPath: publicUrl,
    filename: "js/[name].js",
    globalObject: 'this',
  },
  module: {
    
  },
  plugins: [
    // 生成 index.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('public/index.html'),
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),
    // Makes the public URL available as %PUBLIC_URL% in index.html, e.g.:
    // <link rel="icon" href="%PUBLIC_URL%/favicon.ico">
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: publicUrl,
      // You can pass any key-value pairs, this was just an example.
      // WHATEVER: 42 will replace %WHATEVER% with 42 in index.html.
    }),
    // new CleanWebpackPlugin(),
    new CreateReactPublicPlugin(__dirname,'public',['favicon.ico','index.html','logo192.png','logo512.png','manifest.json','robots.txt']),
  ],
  
});