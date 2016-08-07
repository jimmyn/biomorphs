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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: [
            ['es2015', {'modules': false}],
            'react',
            'stage-0'
          ],
          env: {
            production: {
              presets: ['react-optimize'],
              compact: true
            },
            test: {
              plugins: [
                ['__coverage__', {'only': 'src/'}],
                'babel-plugin-rewire'
              ]
            }
          }
        }
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
      extensions: ['', '.js', '.jsx', '.json'],
      alias: {}
    },
    globals: {},
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
    webpackConfig.plugins.push(
      new webpack.DefinePlugin({
        '__DEV_': true
      })
    );
  }

  if (options.test) {
    process.env.NODE_ENV = 'test';
    webpackConfig.devtool = 'cheap-module-source-map';
    webpackConfig.resolve.alias.sinon = 'sinon/pkg/sinon.js';
    webpackConfig.module.noParse = [
      /\/sinon\.js/
    ];
    webpackConfig.module.loaders.push([
      {
        test: /sinon(\\|\/)pkg(\\|\/)sinon\.js/,
        loader: 'imports?define=>false,require=>false'
      }
    ]);
    // Enzyme fix, see:
    // https://github.com/airbnb/enzyme/issues/47
    webpackConfig.externals = {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': 'window'
    };
    webpackConfig.plugins.push(
      new webpack.DefinePlugin({
        '__COVERAGE__': options.coverage,
        '__TEST_': true
      })
    );
  }

  if (options.prod) {
    process.env.NODE_ENV = 'production';
    webpackConfig.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
          '__PROD__': true
        }
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

  if (options.deploy) {
    webpackConfig.output.publicPath = '/biomorphs/';
  }

  return webpackConfig;
}
