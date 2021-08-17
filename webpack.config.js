const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',

    output: {
        assetModuleFilename: 'assets/[hash][ext]',
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js',
        publicPath: '',
    },

    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]ss)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'sass-loader'                    
                ],
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        }),

        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        })
    ],
}