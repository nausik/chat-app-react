const Path = require('path'),
  Webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './public/src/js/index.jsx',
    vendor: ['react']
  },
  output: {
    path: Path.resolve(__dirname, './public/dist/'),
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
  resolve: {
    alias: {
      styles: Path.resolve(__dirname, './public/src/css/'),
      components: Path.resolve(__dirname, './public/src/components/'),
      js: Path.resolve(__dirname, './public/src/js/'),
      img: Path.resolve(__dirname, './public/img/')
    }
  },
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