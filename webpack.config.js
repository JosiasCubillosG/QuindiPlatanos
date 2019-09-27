const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/app/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg)$/,
                use: [
                    {
                        loader:"url-loader",
                        options: {
                            //Condicion de que la imagen no puede ser mayor a 100.000 bits
                            //Si cumple la condicion, la imagen se convierte a base 64
                            //osea que la imagen se vuelve codigo puro
                            //Si no cumple la condicion lo que hara sera mandar la imagen a los assets
                            //y se enviara directamente como imagen y no como  codigo.
                            limit: 10000,
                            fallback: "file-loader",
                            name: "images/[name].[hash].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            { 
                test: /\.css$/, 
                loader: [
                  MiniCSSExtractPlugin.loader,
                  "css-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/public/index.html",
            filename: "./index.html"
        }),
        new MiniCSSExtractPlugin()
    ]
}