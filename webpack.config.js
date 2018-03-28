const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const rootPath = path.resolve(__dirname, "src");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
	mode: isDev ? "development" : "production",
	entry: {
		main: ["./src/index.tsx", ...(isDev ? ["webpack-hot-middleware/client"] : [])]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: `js/[name].${isDev ? "" : "[hash]."}js`
	},
	resolve: {
		extensions: [".webpack.js", ".js", ".jsx", ".tsx", ".ts"],
		modules: [rootPath, "node_modules"]
	},
	devtool: isDev ? "inline-source-map" : "source-map",
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
		new HTMLWebpackPlugin({
			title: "Hogger",
			inject: "body",
			template: "./src/template.html"
		}),
		...isDev ? [new webpack.HotModuleReplacementPlugin()]
		:
		[]
	]
};
