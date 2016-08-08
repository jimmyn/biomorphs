# Biomorphs

Biomorphs are virtual entities that were devised by [Richard Dawkins](https://richarddawkins.net/) in his book [The Blind Watchmaker](http://www.amazon.com/The-Blind-Watchmaker-Evidence-Evolution/dp/0393315703) as a way to visualize the power of evolution.

## Technological stack

  - app architecture: `react`, `react-redux`, `react-router` `react-router-redux`, `redux-thunk`
  - styling: `sass`, `postcss`, `css-modules`
  - testing: `karma`, `chai`, `sinon`, `enzyme`
  - development and building: `webpack`, `babel`

## Usage
  
  1. Clone the project
  2. `npm install` to install all dependencies

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Starts webpack-dev-server at `localhost:8080`. HMR will be enabled.|
|`start:prod`|Starts production server at at `localhost:8080`. Serves compiled files from `/public` folder|
|`lint`|Lints all `.js` files.|
|`lint:fix`|Lints and fixes all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:watch`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`build`|Compiles all files into `/public` folder|
|`deploy`|Builds all files and deploys them to gh-pages using|

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
