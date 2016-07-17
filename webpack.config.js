import webpack from 'webpack';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
      })
    ],
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.html$/,
        loader: 'html'
      }]
    },
    resolve: {
      modules: ['./src', 'node_modules'],
      extensions: ['', '.js', '.jsx', '.json']
    },
    postcss() {
      return [precss, autoprefixer];
    }
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
