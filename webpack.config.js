const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output:{
        filename: __dirname+'/bundle.js'
    },
    module:{
        loaders: [{
            test: /\.hbs$/,
            loader: 'handlebars-loader?helperDirs[]=/src/util/handlebars-helpers'
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'es2016']
            }
        }]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    devServer:{
        inline: true,
        port: 7777,
        contentBase: __dirname+'/output',
        historyApiFallback: true
    }
};