var HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'app.js',
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
