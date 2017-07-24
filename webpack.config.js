var webpack = require('webpack');

//Script to config Webpack to read all source code and bundle it into a single finished script (bundle.js), in directory dist

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'react-hot-loader!babel-loader'
		}]
	},
	resolve: {
		extensions: ['.js']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};