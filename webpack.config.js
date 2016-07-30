import webpack from 'webpack';
import cssnano from 'cssnano';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const cssModulesLoader = [
  'css?',
  'sourceMap&-minimize',
  'modules',
  'importLoaders=1',
  'localIdentName=[name]__[local]__[hash:base64:5]'
].join('&');

export default function(options) {
  const webpackConfig = {
    entry: [
      './src/index.js'
    ],
    output: {
      path: './public',
      publicPath: '/',
      filename: 'bundle.[hash].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/static/favicon.png',
        filename: 'index.html',
        inject: 'body'
      }),
      new ExtractTextPlugin({
        filename: 'styles.[hash].css',
        allChunks: true
      })
    ],
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.html$/,
        loader: 'html'
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [cssModulesLoader, 'postcss', 'sass?sourceMap']
        })
      }]
    },
    resolve: {
      modules: ['./src', 'node_modules'],
      extensions: ['', '.js', '.jsx', '.json']
    },
    postcss: [
      cssnano({
        autoprefixer: {
          add: true,
          remove: true,
          browsers: ['last 2 versions']
        },
        discardComments: {
          removeAll: true
        },
        discardUnused: false,
        mergeIdents: false,
        reduceIdents: false,
        safe: true,
        sourcemap: true
      })
    ]
  };

  if (options.dev) {
    webpackConfig.devtool = 'source-map';
  }

  if (options.prod) {
    webpackConfig.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': 'production'
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          unused: true,
          dead_code: true,
          warnings: false
        }
      })
    );
  }

  return webpackConfig;
}
