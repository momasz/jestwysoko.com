/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.UV_THREADPOOL_SIZE = 100;
module.exports = {

  output: {
    publicPath: '/assets/',
    path: '/',
    filename: 'main.js'
  },

  cache: true,
  debug: true,
  devtool: "source-map",
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      './src/index.js'
    ]
  },

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'styles': __dirname + '/src/styles'
    }
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.json/,
      exclude: /node_modules/,
      loader: 'json-loader'
    }, {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract('css!sass')
    },
    {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'ngtemplate!html'
    },
    {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      __DEV__: true
    })
  ]
};
