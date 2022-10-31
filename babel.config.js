// babel.config.js
module.exports = {
    // 配置预置环境
    presets: [
        // 使用的规则
        ["@babel/preset-env", {
            // 这儿有false, entry, usage三个可选参数，usage可以按需引入polyfill
            "useBuiltIns": "usage",
            // 指定corejs版本
            "corejs": 2
        }]
    ],
    // 把这个写上是在使用webpack打包过后ui库过后想要直接在本地测试打包后的库，但是你如果不设置这个的话，你直接在项目的main.js
    // 里面引入就会报这个错误："export 'default' (imported as 'Cookie') was not found in '../lib/index.js'，
    // 加上这句即使不发布到npm也可以本地调用了。
    plugins: ['@babel/plugin-transform-modules-umd', [
        // 配置按需引入插件babel-plugin-component
        "component",
        {
            // 库的名字为VUI
            "libraryName": "tu-view",
            // 存放库文件的文件夹为lib
            "libDir": "lib/packages",
        }
    ]]
}