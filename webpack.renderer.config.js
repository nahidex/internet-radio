const rules = require('./webpack.rules');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const assets = [ 'img', 'css', 'fonts' ]; // asset directories

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
  plugins: assets.map(asset => {
    return new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', asset),
        to: path.resolve(__dirname, '.webpack/renderer', asset)
      }
    ]);
  })
};
