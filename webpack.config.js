const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  externals: {
    moment: 'mini.css',
    feathersIcons: 'feather-icons'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
      filename: 'vue-minicss.min.js',
      libraryTarget: 'window',
      library: 'VueMini',
    }
  }),
  // merge(config, {
  //   entry: path.resolve(__dirname + '/src/Clock.vue'),
  //   output: {
  //     filename: 'vue-clock.js',
  //     libraryTarget: 'umd',
  //     library: 'vue-clock',
  //     umdNamedDefine: true
  //   }
  // })
];