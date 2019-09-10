var webpack = require("webpack");
var path = require("path");
var router = require('react-router');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    node: {
        fs: "empty"
    },

    module: {
      
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: SRC_DIR,
                loader: "babel-loader",
                options: {
                    presets: [  {
                       'plugins': ['@babel/plugin-proposal-class-properties']}]
                }

            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.json/,
                type: 'javascript/auto',
                use: [require.resolve('json-loader')],
              },
            {
                test: /\.(ttf|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                    attrs: [':data-src']
                  }
                }
            }
        ]
    }
};
module.exports = config;