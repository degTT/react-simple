const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        // the order of `use` is important!
        use: [{ loader: 'style-loader' },
          { loader: 'css-loader' }],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx','.ts','.js'],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}