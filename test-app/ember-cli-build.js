'use strict';

const packageJson = require('./package');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() === 'production';

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: Object.keys(packageJson.dependencies),
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    /**
     * Embroider's flags
     */
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    splitAtRoutes: [],

    skipBabel: [
      {
        package: 'qunit',
      },
    ],

    packagerOptions: {
      // publicAssetURL is used similarly to Ember CLI's asset fingerprint prepend option.
      publicAssetURL: '/',
      webpackConfig: {
        module: {
          rules: [
            {
              test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192,
                  },
                },
              ],
            },
            {
              // When webpack sees an import for a CSS files
              test: /\.css$/i,
              exclude: /node_modules/,
              use: [
                {
                  // use the PostCSS loader addon
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: isProduction === false,
                    postcssOptions: {
                      config: './postcss.config.js',
                    },
                  },
                },
              ],
            },
          ],
        },
      },
    },
    extraPublicTrees: [],
  });
};
