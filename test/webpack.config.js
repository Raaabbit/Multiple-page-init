const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: ['./src/works/js/index.js'],
    page : ['./src/works/js/page.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devServer: {
    contentBase: "./dist",
    inline:true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'file-loader?name=./res/static/[name].[ext]'
      },
      {
        test: /\.svg$/,
        use: 'file-loader?name=./res/icon_user/[name].[ext]'
      },
      {
        test: /\.html$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:[{
            loader:'css-loader',
            options:{
              minimize:true
            }
          }],
          publicPath:"../"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/[name].css'),
    new HtmlWebpackPlugin({
      template:"./src/index.html",
      filename:"index.html",
      title:"index",
      chunks:['index']
    }),
    new HtmlWebpackPlugin({
      template:"./src/pages/page.html",
      filename:"./pages/page.html",
      title:"page",
      chunks:['page']
    })
  ]
};

