const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/playground.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 options: {
                    presets: ['@babel/preset-env']
                 }
             }
         ]
  }
};
