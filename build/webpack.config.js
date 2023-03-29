const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		main: path.resolve(__dirname, "../examples/main.js"),
	},
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "js/[name].[hash:4].js",
		chunkFilename: "js/[name].[hash:4].js",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							plugins: ["@babel/plugin-syntax-dynamic-import"],
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
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
							esModule: false, // 这个参数要设置成false,不然生成图片的路径时[object Module]
							fallback: "file-loader", // 当文件大于5kb时走file-loader相关的配置
							name: "images/[name].[hash:4].[ext]", // 生成的路径和文件名
						},
					},
				],
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 5120,
							esModule: false,
							fallback: "file-loader",
							name: "media/[name].[hash:4].[ext]",
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
							limit: 5120,
							esModule: false,
							fallback: "file-loader",
							name: "fonts/[name].[hash:4].[ext]",
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
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			// 指定模板
			template: path.resolve(__dirname, "../public/index.html"),
			// 输出的文件
			filename: path.resolve(__dirname, "../dist/index.html"),
		}),
		new VueLoaderPlugin(),
		// 拷贝静态资源
		new copyWebpackPlugin([
			{
				from: path.resolve(__dirname, "../public"),
				to: path.resolve(__dirname, "../dist"),
			},
		]),
	],
	resolve: {
		alias: {
			vue$: "vue/dist/vue.runtime.esm.js",
			"@": path.resolve(__dirname, "../examples"),
			"@packages": path.resolve(__dirname, "../packages"),
			"@lib": path.resolve(__dirname, "../lib"),
		},
		extensions: ["*", ".js", ".vue"],
	},
};
