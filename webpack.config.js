let path = require('path');
let webpack = require('webpack')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'css-loader'
                }
            },
			{
				test: /\.json$/,
				use: {
					loader: 'json-loader'
				}
			}
        ]
    }
};