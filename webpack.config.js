'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const includePath = 'src/js/';
const publicPath = '/js/';
const filename = 'app';

// Production flag is passed in the npm script.
const PROD = process.env.NODE_ENV === 'production';

console.log(' BABLE ENV: ', process.env.NODE_ENV);

console.log('prod', PROD);

const plugins = [
    // Avoid publishing files when compilation failed
    // new webpack.NoErrorsPlugin(),
    // include plugins for module use. a shortcut so modules don't
    // need to import the same plugin over and over.
    /*new webpack.ProvidePlugin({
    }),*/
    new webpack.DefinePlugin({
        PRODUCTION: PROD,
        VERSION: JSON.stringify("0.0.1"),
        // TIMESTAMP: JSON.stringify(new Date().getTime())
        TIMESTAMP: JSON.stringify(new Date())
    }),
    new webpack.HotModuleReplacementPlugin(),

    new ExtractTextPlugin('../css/app.css')
   
];


let outputPath,
devTool,
sassOutputStyle;

devTool = 'source-map';
sassOutputStyle = 'nested';

if(PROD === 1) {
    outputPath = __dirname + '/dist';
    devTool = false;
    sassOutputStyle = 'compressed';

} else {
    outputPath = __dirname + '/public';
    devTool = 'source-map';
    sassOutputStyle = 'nested';
}   


module.exports = {
    resolve : {
        modules: [
          path.resolve('src/js'),
          path.resolve('src/scss'),
          path.join(__dirname, 'node_modules')
        ],
        alias : {
            'jquery' : 'webpack-zepto',
            'babel-polyfill': 'babel-polyfill/dist/polyfill.js'
        }
    },
    resolveLoader: {
        modules: [
            'node_modules'
        ]
    },

    /*
    http://webpack.github.io/docs/configuration.html

    ENTRY
    If you pass a string: The string is resolved to a module which is loaded upon startup.
    If you pass an array: All modules are loaded upon startup. The last one is exported.
    If you pass an object: Multiple entry bundles are created. The key is the chunk name. The value can be a string or an array.
    */

    entry: ['babel-polyfill', 'Index.js'],

    output: {
        path: outputPath + publicPath,
        publicPath: publicPath,
        filename: filename+'.js',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
           
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'babel-preset-stage-3']
                }
            },
            {
              test: /\.scss$/i,
              loader: ExtractTextPlugin.extract({ 
                fallback: 'style-loader',
                use: [
                    
                    {
                        loader: "css-loader", options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                    { loader: 'postcss-loader', 
                        options: { 
                            sourceMap: 'inline', 
                             plugins: function() { 
                                  return [ require('autoprefixer') ] 
                             }  
                         } 
                    },

                    {
                    loader: "sass-loader", options: {
                      sourceMap: true,
                      sourceMapContents: true,
                      outputStyle: sassOutputStyle
                    }
                }] 
              })
            }
        ]

    },

    plugins: plugins,

    stats: {
        // Nice colored output
        colors: true
    },

    // Create Sourcemaps for the bundle
    devtool: devTool

};
