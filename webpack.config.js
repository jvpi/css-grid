const HtmlWebpackPlugin = require('html-webpack-plugin');

const ruleForStyle = {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      }
const rules = [ruleForStyle]

module.exports = {
  module: {rules},
  devServer: {
      open: true,
      compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ]
};
