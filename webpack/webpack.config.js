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
    entry: { //
        login: './src/login/login.jsx',
        home: './src/home/home.jsx'
    },
    output: {
        path: './public',
        publicPath: '',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'src': path.resolve(__dirname, '../src'),
        },
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')],
    },
    module: {
        loaders: [
            {
                test: /\.js(x)*$/,
                loader: 'babel',
                include: path.resolve(__dirname, '../'),
                exclude: /node_modules/,
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
        new ExtractTextPlugin('css/[name].css', {
            disable: false,
            allChunks: true
        }),
    ],
}