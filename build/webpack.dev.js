// build/webpack.dev.js
const webpack = require("webpack");
const webpackCommonConfig = require("./webpack.config.js");
const merge = require("webpack-merge");

module.exports = merge(webpackCommonConfig, {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(scss|sass)$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
					{
						loader: "sass-loader",
						options: {
							implementation: require("dart-sass"),
						},
					},
					// {
					// 	loader: "postcss-loader",
					// },
				],
			},
		],
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		// 启用热更新必须的
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		// 默认情况不设置这个只能通过localhost:9000来访问，现在可以通过本机局域网ip来访问，
		// 比如192.168.12.21:9000，手机在这个局网内也可以访问
		// host: '0.0.0.0',
		hot: true,
		port: 9300,
		contentBase: "./dist",
	},
});
