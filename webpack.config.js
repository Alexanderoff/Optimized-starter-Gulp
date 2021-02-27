module.exports = {
  mode: process.argv.includes('--prod') ? 'production' : 'development',
  entry: {
    main: './src/js/main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
};