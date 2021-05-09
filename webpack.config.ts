import { resolve } from 'path';
import HtmlWebpackPlugin = require('html-webpack-plugin');
import MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	watchOptions: {
		poll: 100
	},
	entry: './src/index.ts',
	output: {
		filename: 'bundle-[name].js',
		path: resolve(__dirname, 'dist'),
		assetModuleFilename: 'asset/[name]-[hash][ext][query]',
	},
	optimization: {
		usedExports: true,
		moduleIds: 'deterministic',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				'vendor': {
					test: /node_modules/,
					name: 'vendor',
					chunks: 'all',
				}
			},
		},
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: false
						}
					},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					'resolve-url-loader',
					{
						loader: 'sass-loader?sourceMap',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	}
};
