const path = require('path');
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


const getPackagePath = x => `./packages/${x}/src/index.js`;

const packageFiles = [
	'core'
];

const entry = packageFiles.reduce((o, file) => Object.assign(o, {[`${file}.min.js`]: getPackagePath(file)}), {});


module.exports = {
	entry,
	output: {
		path: path.resolve(__dirname, './bundles'),
		filename: 'gscatterjs-[name]'
	},
	resolve: {
		modules:[
			"node_modules"
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env'
						],
						plugins:[
							'@babel/plugin-transform-runtime'
						]
					}
				},
				exclude: /node_modules/
			}
		],
	},
	plugins: [
		// new UglifyJsPlugin()
	],
	stats: { colors: true },
	devtool: false,
	// devtool: 'inline-source-map',
	externals: {
		'gscatterjs-core': 'gScatterJS'
	}
}