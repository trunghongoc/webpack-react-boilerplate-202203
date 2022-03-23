const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const commonPaths = require('./paths')

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: ['@babel/preset-typescript', '@babel/react'],
          plugins: [
            // ['import', { libraryName: 'antd', style: true }],
            require.resolve('react-refresh/babel')
          ].filter(Boolean)
        }
      },
      {
        test: /\.(css|scss)$/,
        include: /\.module\.(css|scss)$/,
        use: [
          { loader: 'style-loader' }, // to inject the result into the DOM as a style block
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]_[hash:base64:5]'
              }
            }
          },
          { loader: 'sass-loader' } // to convert SASS to CSS
        ]
      },
      {
        test: /\.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: true
  },
  plugins: [new ReactRefreshWebpackPlugin()]
}
