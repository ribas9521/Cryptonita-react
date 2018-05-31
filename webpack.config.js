const HtmlWebPackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
const jQueryPlugin = new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery'
});


module.exports = {
    resolve: {
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jquery/jquery.min.js',
            bootstrap: 'modules/admin-lte/plugins/bootstrap/css/bootstrap.min.css'
        }
    },
     plugins: [htmlWebpackPlugin, jQueryPlugin, new MiniCssExtractPlugin({
         filename: 'style.css'
     })],
    module: {                   
        rules: [
            {
                test: /.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"                   
                }
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,                      
                    'css-loader',
                    'sass-loader'
                ]
            },            
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, 
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, 
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            }, 
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            }, 
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader : 'file-loader'
            }
        ]
        
    }
   
};