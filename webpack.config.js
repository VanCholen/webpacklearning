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
    
    // 一些模块 譬如css-loader、style-loader等的配置
    module: {
        rules: [
            {
                // 以css结尾的文件应用下面的loader
                test: /\.css$/,
                // 顺序从右往左依次使用css-loader、再使用style-loader
                // css-loader完成CSS文件到JavaScript模块的转换
                // style-loader将JavaScript模块中的样式内容通过DOM操作写入到HTML页面的style节点中
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}