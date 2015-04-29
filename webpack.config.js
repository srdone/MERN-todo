module.exports = {

  entry: './public/index.jsx',
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8090/assets'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    'react': 'React',
    'marked': 'marked',
    '$': '$'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }

};