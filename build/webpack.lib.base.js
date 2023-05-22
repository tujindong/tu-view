const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const config = require("./config");

module.exports = {
	externals: config.externals,
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 5120,
							esModule: false,
							fallback: "file-loader",
							name: "images/[name].[hash:4].[ext]",
						},
					},
				],
			},
			{
				test: /\.vue$/,
				use: [
					{
						loader: "vue-loader",
						options: {
							compilerOptions: {
								preserveWhitespace: false,
							},
						},
					},
				],
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							publicPath: "./",
							limit: 5120,
							esModule: false,
							fallback: "file-loader",
							name: "fonts/[name].[hash:4].[ext]",
						},
					},
				],
			},
		],
	},
	plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()],
	resolve: {
		alias: {
			vue$: "vue/dist/vue.runtime.esm.js",
			"@": path.resolve(__dirname, "../examples"),
			"@packages": path.resolve(__dirname, "../packages"),
		},
		extensions: ["*", ".js", ".vue"],
	},
};
