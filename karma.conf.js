import {argv} from 'yargs';
import webpackConfigFactory from './webpack.config';

const webpackConfig = webpackConfigFactory({
  test: true,
  coverage: !argv.watch
});

const karmaConfig = {
  files: [
    {
      pattern: './tests/testBundler.js',
      watched: false,
      served: true,
      included: true
    }
  ],
  singleRun: !argv.watch,
  frameworks: ['mocha'],
  reporters: ['mocha'],
  preprocessors: {
    ['./tests/testBundler.js']: ['webpack']
  },
  browsers: ['PhantomJS'],
  webpack: webpackConfig,
  webpackMiddleware: {
    noInfo: true,
    stats: 'errors-only'
  },
  coverageReporter: {
    reporters: [
      {type: 'text-summary'},
      {type: 'lcov', dir: 'coverage'}
    ],
    check: {
      global: {
        statements: 50,
        branches: 50,
        functions: 50,
        lines: 50,
        excludes: []
      }
    }
  }
};

if (!argv.watch) {
  karmaConfig.reporters.push('coverage');
}

// cannot use `export default` because of Karma.
module.exports = (cfg) => cfg.set(karmaConfig);
