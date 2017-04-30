var path = require("path");
var ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");

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
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'src/sw.js')
    })
  ]
};
