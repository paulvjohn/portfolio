var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src/frontend'),
  entry: path.join(__dirname, 'src/frontend/index.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: '6to5-loader!jsx-loader?harmony' },
      { test: /\.js$/, exclude: /node_modules/, loader: '6to5-loader' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
