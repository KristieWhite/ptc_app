var webpack = require('webpack');

module.exports = {
  entry: "./js/main.js",
  output: {
    path: __dirname,
    filename: "js/bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      "_": "underscore",
      "$": "jquery"
    })
  ],
  module: {
    loaders: [
      {test: /\.css$/, loader:'style!css'},
      {test:/\.html$/, loader:'mustache'},
      {test: /\.json$/, loader:'json'}
    ]
  }
}