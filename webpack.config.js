const Path = require('path'),
  Webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx',
    vendor: ['react']
  },
  output: {
    path: Path.resolve('./public'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.bundle.js"
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true
    }),
    new Webpack.NamedModulesPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'resolve-url-loader', 'sass-loader'])
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  devServer: {
    hot: true
  }
};