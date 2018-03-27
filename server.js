const { join, resolve } = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
// const webpackHotMiddleware = require("webpack-hot-middleware");
const express = require("express");
const app = express();
const port = 8888;

const config = require("./webpack.config");
const compiler = webpack(config);

const env = process.env.NODE_ENV;

app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
// app.use(webpackHotMiddleware(compiler));

app.listen(port, function() {
	console.log("App listening on port 8888\n");
})
