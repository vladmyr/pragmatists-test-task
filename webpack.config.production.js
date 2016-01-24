var config = require("config");
var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
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
                loader: "babel"
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
};