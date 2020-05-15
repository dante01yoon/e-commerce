const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.tsx',
  
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 5000,
    hot: true, 
    publicPath: '/',
  },
  mode: 'none', 
  module: {
    rules: [
      {
        test:/\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          'file-loader'
        ] 
      }
    ],
  },

  resolve: {
    extensions: ['.js','.jsx','.ts','.tsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    }), 
  ]
}