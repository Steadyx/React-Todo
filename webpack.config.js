const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
			entry: './src/scripts/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './scripts/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}, {
				test: /\.js$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: "babel-loader",
				options: {
					presets: ['es2015', 'react', 'env']
				}
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	},
	plugins: [new HtmlWebpackPlugin({template: './src/index.html'})]
}
