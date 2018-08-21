const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Template | freecodecamp.org',
      minify:{
          collapseWhitespace: true
      },
      template: './src/index.html'
    })
  ]
}