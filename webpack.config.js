const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {    
    resolve: {
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jquery/jquery.min.js',
            bootstrap: 'modules/admin-lte/plugins/bootstrap/css/bootstrap.min.css'
        }
    },
    module: {                   
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"                   
                }
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
                use:{
                    loader: 'file'
                }
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    },
                    {                        
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [htmlWebpackPlugin, new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })]
};