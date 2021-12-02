const path = require('path')
module.exports = {
    entry: './src/main', //入口文件
    output: {
        // 构建后的文件名 
        filename: 'bundle.js',
        // 构建后文件的存放目录
        path: path.resolve(__dirname, './build')
    },
    //构建方式设置为开发模式
    mode: 'development',
}