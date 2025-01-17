//@ts-check

'use strict';

const path = require('path');
const webpack = require('webpack');

/**@type {import('webpack').Configuration}*/
const config = {
  target: 'node', // changed from 'webworker' to 'node' for Node.js environment

  entry: './src/extension.js', // the entry point of this extension
  output: {
    // the bundle is stored in the 'dist' folder
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]',
  },
  devtool: 'source-map',
  externals: {
    vscode: 'commonjs vscode', // the vscode-module is created on-the-fly and must be excluded
  },
  resolve: {
    // support reading TypeScript and JavaScript files
    mainFields: ['module', 'main'], // removed 'browser' field
    extensions: ['.ts', '.js'],
    alias: {
      // provides alternate implementation for node module and source files
    }
  },
};

module.exports = config;
