const webpack = require('webpack')
const convert = require('koa-connect')
const history = require('connect-history-api-fallback')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const TSLintPlugin = require('tslint-webpack-plugin')
const commonPaths = require('./paths')

module.exports = {
  entry: commonPaths.entryPath,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder
            }
          }
        ]
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder
            }
          }
        ]
      }
    ]
  },
  serve: {
    add: app => {
      app.use(convert(history()))
    },
    content: commonPaths.entryPath,
    dev: {
      publicPath: commonPaths.outputPath
    },
    open: true
  },
  resolve: {
    // modules: ['src', 'node_modules'],
    // extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true,
      emitWarning: process.env.NODE_ENV !== 'production'
    }),
    new TSLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      emitWarning: process.env.NODE_ENV !== 'production'
    }),
    new webpack.ProvidePlugin({
      React: 'react' // no more necessary import React in any file
    })
  ]
}
