var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: "./src/index.js",

  output: {
    path: path.resolve('dist'),
    filename: "bundle.js",
    publicPath: "/"
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },
      {test: /\.(sass|scss)$/, use: ["style-loader", "css-loader", "sass-loader"], exclude: /node_modules/},
      {test: /\.(jpe?g|gif|png|svg|ttf)$/, use: "file-loader", exclude: /node_modules/}
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    })
  ]
};