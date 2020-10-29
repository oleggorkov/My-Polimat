const path = require('path');
const DashboardPlugin = require("webpack-dashboard/plugin");

// Main const
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: './'
};

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: `${PATHS.src}/js/index`,
    // module: `${PATHS.src}/your-module.js`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
  },
  resolve: {
    alias: {
      '~': PATHS.src,
      'vue$': 'vue/dist/vue.js',
    }
  },
  plugins: [
    new DashboardPlugin(),
  ]
};
