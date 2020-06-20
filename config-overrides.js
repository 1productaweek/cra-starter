/* eslint-disable @typescript-eslint/no-var-requires */
const { override, addBabelPlugins, addBabelPreset, addLessLoader } = require('customize-cra')

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  }),
  addBabelPreset('@emotion/babel-preset-css-prop'),
  addBabelPlugins(
    '@babel/plugin-transform-react-display-name',
    'emotion',
    [
      'module-resolver',
      {
        alias: {
          test: './test',
          '#': './src',
        },
        extensions: [
          '.js',
          '.jsx',
          '.es',
          '.es6',
          '.mjs',
          '.ts',
          '.tsx',
        ],
        stripExtensions: [
          '.js',
          '.jsx',
          '.es',
          '.es6',
          '.mjs',
          '.ts',
          '.tsx',
        ],
      },
    ],
  ),
)
