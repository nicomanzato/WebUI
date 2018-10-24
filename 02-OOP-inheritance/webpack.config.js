const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/playground.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
};
