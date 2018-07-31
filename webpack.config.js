var path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/app.js",
    output: {
        path: path.resolve('./dist'),
        filename: "bundles.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            }
        ]
    }
}