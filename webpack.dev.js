const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  mode: 'development',
  devtool: 'eval',
  // File webpack starts bundling
  entry: './src/index.js',
  // Options related to how webpack emit results
  output: {
    // The traget directory for all output files
    // Must be an absolute path. (use the Node.js path moduel)
    path: path.resolve(__dirname, 'docs'),
    // The filename template for entry chunks
    filename: 'script/[name].bundle.js'
  },
  // Configuration regarding modules
  module: {
    // Rules for modules (configure loaders, parser options, etc.)
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.(c|sa|sc)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.(jpe?g|png|gif|woff|woff|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.vue',
      '.json'
    ],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      // simplifies writing import paths
      '@': path.resolve(__dirname, 'src')
    }
  },

  plugins: [
    // Delete the docs directory before each build, to remove old files.
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'static/index.html'),
      inject: true
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'static'),
      to: path.resolve(__dirname, 'docs'),
      toType: 'dir'
    }])
  ],
  devServer: {
    compress: true,
    host: 'localhost',
    https: false,
    open: true,
    overlay: true,
    port: 8000
  }
}
