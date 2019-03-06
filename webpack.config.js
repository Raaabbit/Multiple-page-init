const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: ['./src/works/js/index.js'],
    page: ['./src/works/js/page.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devServer: {
    contentBase: "./dist",
    inline: true
  },
  module: {
    rules: [
      // 图片文件
      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'file-loader?name=./res/static/[name].[ext]'
      },
      // 矢量图
      {
        test: /\.svg$/,
        use: 'file-loader?name=./res/icon_user/[name].[ext]'
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      // html中的img
      {
        test: /\.html$/,
        use: 'html-withimg-loader'
      },
      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // ts
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/, // CSS文件通过 style-loader 和 css-loader 处理
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true // 打包后压缩
            }
          }],
          publicPath: "../"
        })
      },
      { 
        test: /\.styl$/, 
        loader: 'style-loader!css-loader!stylus-loader' 
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('./css/[name].css'),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: "index",
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/page.html",
      filename: "./pages/page.html",
      title: "page",
      chunks: ['page']
    })
  ]
};

