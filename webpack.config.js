const path = require("path");

const config = {
	context: __dirname,
	entry: "./client/js/index.jsx",
	devtool: "source-map",
	output: {
		path: path.join(__dirname, "/client/js/compiled"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: [" ", ".js", ".jsx", ".json"]
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.jsx?$/,
				loader: "eslint-loader",
				exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	}
};

if (process.env.NODE_ENV === "production") {
	config.entry = "./client/js/index.jsx";
	config.devtool = false;
	config.plugins = [];
}

module.exports = config;
