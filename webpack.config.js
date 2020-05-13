const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

    const isProduction = env === 'production';
    let env1={};
    let src, srcStyle1;
    let publicPathSite;
    if(isProduction){
        env1 = dotenv.config({path:'.env'}).parsed;
        publicPathSite = process.env.PUBLIC_URL + process.env.SUBDIRECTORY + '/dist/';
        src = process.env.PUBLIC_URL + process.env.SUBDIRECTORY +'/dist/bundle.js';
        srcStyle1 =  process.env.PUBLIC_URL + process.env.SUBDIRECTORY + '/dist/styles.css';
    }else{
        env1 = dotenv.config({path:'.env.development'}).parsed;
        publicPathSite = process.env.LOCALSERVER ==='f' ? process.env.PUBLIC_URL + 'dist/' : process.env.PUBLIC_URL_LOCALSERVER + '/dist/';
        src= process.env.LOCALSERVER ==='f' ? '/dist/bundle.js' : process.env.PUBLIC_URL_LOCALSERVER + '/dist/bundle.js';
        srcStyle1 = process.env.LOCALSERVER ==='f' ? '/dist/styles.css' : process.env.PUBLIC_URL_LOCALSERVER + '/dist/styles.css';
    }

    console.log(publicPathSite);

// reduce it to a nice object, the same as before
    const envKeys = Object.keys(env1).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env1[next]);
    return prev;
  }, {});

    return {
        mode: process.env.NODE_ENV || 'development',
        entry: ['babel-polyfill','./src/index.js'],
        output :{
            path: path.join(__dirname,'public', 'dist'),
            filename: 'bundle.js'
            //publicPath: '/'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(woff2|woff|ttf|svg|eot)$/,
                loader: 'file-loader'
            },{
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                options: {
                 // name: '[path][name].[hash].[ext]',
                 // name: '[name].[contenthash].[ext]',
                  name: '[path][name].[ext]',
                 // outputPath: 'assets', // filesystem path where the target file(s) will be placed.
                  publicPath:  publicPathSite, // + 'assets',
                  postTransformPublicPath: (p) => `__webpack_public_path__ + ${p}`,
                },
    
            },
            {
                test: /\.s?css$/,
                use:[
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: publicPathSite,
                        },
                      },
                      {
                          loader: 'css-loader',
                          options: {
                            sourceMap: false
                        }
                      },
                      {
                        loader: 'postcss-loader',
                        options: {
                          plugins: () => [autoprefixer()]
                        }
                      },
                      {
                        loader: 'sass-loader',
                        options: {
                           sourceMap: isProduction ? false : true
                       }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'ejs-loader'
                }, {
                    loader: 'extract-loader'
                }, {
                    loader: 'html-loader',
                        options: {
                        interpolate: true
                        }
                    }]
              }
            ]},
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css',
                chunkFilename: '[id].css'
            }),
            new webpack.DefinePlugin(envKeys),
            new HtmlWebpackPlugin({  
                inject: false,
                filename: '../index.html',
                templateParameters: {
                  title: 'Router in React',
                  src: src, 
                  srcStyle1: srcStyle1
                }
              })
          ]

    };

};
