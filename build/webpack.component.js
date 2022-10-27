//webpack.config.js
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'my-lib.js',
        libraryTarget: 'umd',  //用到的模块定义规范
        library: 'myLib',   //库的名字
        libraryExport: 'default'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}