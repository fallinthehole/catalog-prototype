const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/javascript/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: ExtractCssChunks.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js']
  },
  watch: true,
  plugins: [
    new ExtractCssChunks({
      filename: 'css/style.min.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ]
};
