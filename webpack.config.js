const path = require('path');

// 导出插件
const MiniCssPlugin = require('mini-css-extract-plugin');

// 导入HtmlWebPackPlugin
const HtmlWebPackPlugin = require('html-webpack-plugin');

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
                //use: ['style-loader', 'css-loader']
                
                // 将style-loader替换为MiniCssPlugin提供的loader
                use: [MiniCssPlugin.loader, 'css-loader']
            },
            {
                // 以gif/png/jpg结尾的文件应用file-loader
                test: /\.(gif|png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // 构建文件名和目录设置，[name]和[ext]是占位符
                            name: 'images/[name].[ext]',
                            esModule: false, //是否启用ES6模块系统
                        }
                    }
                ]
            }
        ]
    },

    // 开发服务器配置
    devServer: {
        // URL的根目录
        static: {
            directory: path.join(__dirname, 'build'),
          },
        // DevServer的HTTP服务端口
        port: 8080
    },

    plugins: [
        // 实例化MiniCssPlugin
        new MiniCssPlugin({
            // 输出的CSS文件名
            filename: 'css/[name].css',
        }),

        // 实例化HtmlWebPackPlugin
        new HtmlWebPackPlugin({
            chunks: ['main'],
            filename: 'index.html', // 构建后的文件名
            template: 'index.html' // 源文件名
        })
    ]
};