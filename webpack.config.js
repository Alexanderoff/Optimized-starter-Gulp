export const mode = process.argv.includes('--prod') ? 'production' : 'development';
export const entry = {
  main: './src/js/main.js',
};
export const module = {
  rules: [
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
  ],
};
export const output = {
  filename: '[name].js',
  chunkFilename: '[name].js',
  publicPath: '/',
};
