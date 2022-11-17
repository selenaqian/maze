const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.dev ? 'development' : 'production',
    entry: {
      index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      https: true,
      static: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Develop',
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  }  
};