const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

const assets = [ 'img' ]; // asset directories
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const assets = [ 'img' ]; // asset directories


rules.push({
  test: /\.s[ac]ss$/i,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  module: 
  {
    rules,
  },
  // resolve: {
  //   extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  // },
  plugins: assets.map(asset => {
    return new CopyWebpackPlugin([
        {
        from: path.resolve(__dirname, 'src', asset),
        to: path.resolve(__dirname, '.webpack/renderer', asset)
        }
    ]);
  })
  // plugins: plugins
};
