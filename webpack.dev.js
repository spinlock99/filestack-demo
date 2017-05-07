var path = require("path");
var OfflinePlugin = require("offline-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      include: __dirname,
      query: {
        presets: ["es2015", "react", "react-hmre"]
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo PWA",
      template: "src/index.ejs"
    }),
    new OfflinePlugin()
  ]
};
