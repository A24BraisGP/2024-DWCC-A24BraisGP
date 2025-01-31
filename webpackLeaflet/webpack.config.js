const path = require('node:path');
const CopyPlugin = require('copy-webpack-plugin');
const { write } = require('node:fs');
module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'), // __dirname: ruta absoluta directorio actual
		filename: 'index.js',
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: 'src/html', to: './', force: true },
				{ from: 'src/css', to: './', force: true },
			],
		}),
	],
	devServer: {
		devMiddleware: {
			writeToDisk: true,
		},
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 3001,
		// open: true,
		open: {
			app: { name: 'google-chrome' },
		},
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
