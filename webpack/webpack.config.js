var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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

var entry = {
    login: './src/login/login.jsx',
    home: './src/home/home.jsx',
    about: './src/about/about.jsx',
};
var htmlPlugins = [];

for(var name in entry){
    htmlPlugins.push(new HtmlWebpackPlugin({
        chunks: [name],
        template: 'template.html',
        filename: 'html/'+ name + '.html'
    }));
}

module.exports = {
    cache: false, //
    //页面入口文件配置
    entry: entry,
    //入口文件输出配置
    output: {
        path: './public',
        publicPath: '',
        filename: 'js/[name].js'
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
            { // 处理json文件
                test: /\.json$/,
                loader: 'json'
            },
            { // 处理图片
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            { // 处理字体文件
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]',
                }
            },
            { // 处理css文件
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css?sourceMap&-restructuring!' + 'postcss-loader')
            },
            { // 处理less文件
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!' + 'postcss-loader!' + 'less?{"sourceMap":true,"modifyVars":{}}')
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css', { // 将css打包到一个文件中
            disable: false,
            allChunks: true
        }),
    ].concat(htmlPlugins),
}