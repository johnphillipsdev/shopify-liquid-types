const path = require("path");

module.exports = {
  mode: "production", // Set the mode to 'production' or 'development'
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "ShopifyLiquidTypes",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};
