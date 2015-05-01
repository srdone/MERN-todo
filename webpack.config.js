module.exports = {

  entry: './public/index.jsx',
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8090/assets'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        excludes: ['node_modules'],
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    'react': 'React',
    'marked': 'marked',
    '$': '$',
    'moment': 'moment'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }

};