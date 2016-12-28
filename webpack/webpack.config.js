var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var babelPlugins = ['add-module-exports', 'typecheck', 'transform-runtime', ["import", [{
    "libraryName": "antd",
    "style": "css"
}]]];
var babelQuery = {
    cacheDirectory: true,
    presets: ['es2015', 'react', 'stage-0'],
    plugins: babelPlugins,
    comments: false
};
module.exports = {
    cache: false, //
    //页面入口文件配置
    entry: {
        login: './src/login/login.jsx',
        home: './src/home/home.jsx'
    },
    //入口文件输出配置
    output: {
        path: './public',
        publicPath: '',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'], // 用于指明程序自动补全识别哪些后缀
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'src': path.resolve(__dirname, '../src'),
        },
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')],
    },
    module: {  //定义对模块的处理逻辑
        loaders: [  //定义一系列的加载器
            {
                test: /\.js(x)*$/,  //匹配希望处理文件的路径
                loader: 'babel',   //babel加载器可以把jsx的语法转换为js的语法
                include: path.resolve(__dirname, '../'), //字符串或者数组，指包含的文件夹
                exclude: /node_modules/,  //匹配不希望处理文件的路径
                query: babelQuery,
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]',
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css?sourceMap&-restructuring!' + 'postcss-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!' + 'postcss-loader!' + 'less?{"sourceMap":true,"modifyVars":{}}')
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css', { //给CSS打一个完整包
            disable: false,
            allChunks: true
        }),
    ],
}