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
  module: {
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
            loader: "style-loader" // Creates style nodes from JS strings
          },
          {
            loader: "css-loader" // Translates CSS into CommonJS
          },
          {
            loader: "less-loader" // Compiles Less to CSS
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
      },
      // All files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        options: {
          configFile: path.resolve(__dirname, 'tsconfig.json')
　　　　 }
      }
    ]
  },
  plugins: [
    new WebpackBar({
      name: '⛳ MySpace Front',
    }),
  ],
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json"
    ], // 省略获取后缀文件名不加后缀
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  output: {
    // 打包文件根目录
    path: path.resolve(__dirname, "dist/"),
  },
};
