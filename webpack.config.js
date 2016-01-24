var config = require("config");
var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "." + path.join(config.dir.client, config.file.client.index)
    ],
    output: {
        path: path.join(__dirname, config.dir.public),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                //loader: "react-hot!babel"
                loader: "babel"
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    devServer: {
        hot: true,
        contentBase: "." + config.dir.public
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};