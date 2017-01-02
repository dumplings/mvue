var vue = require('vue-loader');
var webpack = require('webpack');
var path = require('path');

var paths = {
  src: './src/',
  dist: './dist/',
  root: './'
};

module.exports = {
  entry: {
    'index.js': paths.src + 'mvue.js'
  },
  output: {
    path: path.resolve(__dirname, ''),
    publicPath: path.resolve(__dirname, ''),
    filename: '[name]'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.styl'],
    alias: {
      'src': path.resolve(__dirname, '')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    },
    {
      test: /\.js$/,
      exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
      loader: 'babel',
      query: {
        compact: false
      }
    }, 
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    }, 
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    }]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  vue: {
    postcss: [
      require('autoprefixer')({
        browsers: ['last 100 versions']
      })
    ]
  }
};