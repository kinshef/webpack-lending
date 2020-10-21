'use strict'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = (env, options) => {
  const isDevelopment = options.mode === 'development'

  const optimization = () => {
    const config = {}

    if (!isDevelopment) {
      config.minimizer = [
        new OptimizeCssAssetWebpackPlugin(),
        new TerserWebpackPlugin({
          extractComments: false,
        }),
      ]
    }
    return config
  }

  const plugins = () => {
    const base = [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ]

    if (!isDevelopment) {
      base.push(new BundleAnalyzerPlugin())
    }

    return base
  }

  return {
    mode: isDevelopment ? 'development' : 'production',
    watch: isDevelopment,

    output: {
      path: path.join(__dirname),
    },

    devtool: isDevelopment ? 'source-map' : '',

    devServer: {
      port: 4200,
      disableHostCheck: true,
      overlay: true,
      writeToDisk: true,
      open: true,
    },

    optimization: optimization(),
    plugins: plugins(),

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                ['@babel/plugin-transform-runtime'],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
              ],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
              },
            },
          ],
        },
        {
          test: /.*\.(svg|gif|png|jpe?g|webp)$/i,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src',
            },
          },
        },
      ],
    },
  }
}
