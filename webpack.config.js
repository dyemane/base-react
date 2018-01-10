/*'use strict'*/
var webpack = require('webpack')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: 'dist'
  },

  devServer: {
    contentBase: __dirname,
    historyApiFallback: true
  },
  devtool: 'cheap-module-source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]___[local]',
            },
          },
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(png|jpg|gif|ttf|((eot|svg|woff2?)(\?.*)?))$/,
        loader: 'file-loader',
      },
    ]
  },
}
