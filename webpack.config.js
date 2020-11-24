const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|png|svg)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};