let webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    helpers = require('./helpers');

module.exports = {
  entry: {
    'app':'./src/bootstrap.aot.ts',
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['', '.js', '.ts', '.json', '.css', '.scss', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript?tsconfig=tsconfig.json',
          'angular2-template'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]'
      },

      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },
      { test: /.scss$/, loaders: ['raw-loader', 'sass-loader'] },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style', 
          'css?sourceMap!sass?sourceMap'
        )
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
