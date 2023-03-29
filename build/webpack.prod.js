const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const webpackCommonConfig = require("./webpack.config.js");
const webpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssnanoPlugin = require("@intervolga/optimize-cssnano-plugin");

module.exports = merge(webpackCommonConfig, {
	mode: "production",
	optimization: {
		runtimeChunk: true,
		splitChunks: {
			cacheGroups: {
				vendors: {
					name: "chunk-vendors",
					test: /[\\\/]node_modules[\\\/]/,
					priority: -10,
					chunks: "all",
				},
				common: {
					name: "chunk-common",
					minChunks: 2,
					priority: -20,
					chunks: "all",
					reuseExistingChunk: true,
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.(scss|sass)$/,
				use: [
					{
						loader: miniCssExtractPlugin.loader,
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
					//     loader: 'postcss-loader'
					// }
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpackBundleAnalyzer({
			analyzerMode: "static",
		}),
		new miniCssExtractPlugin({
			filename: "css/[name].[hash:4].css",
			chunkFilename: "css/[name].[hash:4].css",
		}),
		new optimizeCssnanoPlugin({
			sourceMap: true,
			cssnanoOptions: {
				preset: [
					"default",
					{
						discardComments: {
							removeAll: true,
						},
					},
				],
			},
		}),
	],
});
