var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  plugins: [new OpenBrowserPlugin({ url: "http://localhost:3000" })],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};
