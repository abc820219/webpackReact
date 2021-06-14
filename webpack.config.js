const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const mode =
    process.env.NODE_ENV === 'production' ? 'production' : 'development'
module.exports = {
    mode, //預設development   production
    entry: ['react-hot-loader/patch', './src'], //預設./src/index.js
    output: {
        path: path.resolve(__dirname, 'dist'), //預設dist
        filename: 'main.[hash].js', //預設 main.js [hash]每次都不一樣
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), //測試server啟動的資料夾 預設root
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/i, //正規判斷要使用loader的檔案
                use: [
                    'css-hot-loader',　//修改css部重整頁面並且更新 檔案不能有hash
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.m?(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // 此設定可以選擇babel.config.json裡面
                    // options: {
                    //     presets: ['@babel/preset-env'],
                    // },
                },
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devtool: 'source-map',
    // HtmlWebpackPlugin 自動引入js
    // MiniCssExtractPlugin 自動引入css
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
    ],
}
