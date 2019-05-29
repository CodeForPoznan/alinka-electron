const webpack = require('webpack');
const path = require('path');
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
	entry: ['./src/App.js'],
	target: 'electron-renderer',
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: './',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					/node_modules/,
					/.json?/
				],
				use: {
					loader: 'babel-loader',
					query: {
						presets: ["env","react"]
					}
				}
			}, {
				test: /\.(s*)css$/,
				use: ['style-loader','css-loader']
			}
		]
	},
	plugins:[
		htmlPlugin,
		hotModulePlugin
	],
	resolve: {
		extensions: ['.js','.jsx']
	},
	devServer: {
		publicPath:'http://localhost:9000',
		contentBase: path.join(__dirname, 'assets'),
		open: false,
		lazy: false,
		compress: true,
		historyApiFallback: true,
		port: 9000
	}
}