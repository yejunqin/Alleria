const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const rootPath = path.resolve(__dirname, "src");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
	entry: ["./src/index.tsx"],
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: `js/[name].${isDev ? "" : "[chunkhash]."}js`
	},
	resolve: {
		extensions: [".webpack.js", ".js", ".jsx", ".tsx", ".ts"],
		modules: [rootPath, "node_modules"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "ts-loader"
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: isDev
		}),
		new HTMLWebpackPlugin()
	]
};
