var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './app/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
    }, {
      test: /\.css?$/,
      use: ExtractTextPlugin.extract({ use: ['css-loader'] })
    }]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}