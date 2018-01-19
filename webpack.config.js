const webpack = require('webpack');
const path = require('path');

let config = {
  entry: './main.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map'
}

module.exports = config;



