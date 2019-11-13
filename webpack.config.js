const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

/***********************/
/* HTML Webpack Plugin */
/***********************/
const htmlPlugin = new HtmlWebPackPlugin({
  title: "Alinka",
  template: "./src/index.html",
  filename: "./index.html"
});
// Create the html acessible for the app in production
const hotModulePlugin = new webpack.HotModuleReplacementPlugin();

/*************************/
/* Webpack Configuration */
/*************************/
module.exports = {
  entry: ["./src/App.js"],
  target: "electron-renderer",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "./",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /.json?/],
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/env", "@babel/react"] }
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: { localIdentName: "[name]__[local]___[hash:base64:5]" }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(ttf|png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin, hotModulePlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    publicPath: "http://localhost:9000",
    contentBase: path.join(__dirname, "assets"),
    open: false,
    lazy: false,
    compress: true,
    historyApiFallback: true,
    port: 9000,
    host: 'localhost'
  }
};
