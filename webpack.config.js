var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: "./src/index.jsx",

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.(sass|scss)$/, use: ["style-loader", "css-loader", "sass-loader"], exclude: /node_modules/ },
      { test: /\.(jpe?g|gif|png|svg|ttf)$/, use: "file-loader", exclude: /node_modules/ }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    })
  ]

};