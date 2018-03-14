var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.(less)$/, use: ["style-loader", "css-loader", "less-loader"], exclude: /node_modules/ },
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