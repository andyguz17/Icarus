import path from 'path';

import HtmlWebPackPlugin from 'html-webpack-plugin';

const config = {
  entry: './src/index.tsx',

  mode: process.env.NODE_ENV || 'development',

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};

export default config;
