const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: __dirname + "/src/index.js",
	output: {
		filename: "bundle.js",
		path: __dirname + "/assets/",
		publicPath: "/assets/"
	},
	
	module: {
		loaders: [
			{ test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules' })},
		
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}	
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('style.css')
	]
}
