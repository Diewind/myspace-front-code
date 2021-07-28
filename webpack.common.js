/*
 * @Description: webpack公共配置文件
 * @Author: ZYF <yanfengz.zhang@hand-china.com>
 * @Date: 2021-03-30 19:45:03
 * @Version: 0.0.1
 * @Copyright: Copyright (c) 2021, Hand
 */
const path = require('path');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: './src/index.js',
  module:{
    rules: [
      {  
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new WebpackBar({
      name: '⛳ MySpace Front',
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"] //这个是省略获取后缀文件名不加后缀
  },
  output: {
    // 打包文件根目录
    path: path.resolve(__dirname, "dist/"),
  },
};