const WebpackBar = require('webpackbar');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const glob = require('glob');
const path = require('path');
const fs = require('fs');

const faviconSrc = path.resolve(__dirname, './../src/images/favicon-src.png');

const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map((dir) => {
  return new HTMLWebpackPlugin({
    filename: path.basename(dir),
    template: dir,
  });
});

module.exports = {
  entry: ['./src/javascripts/scripts.js', './src/stylesheets/styles.scss'],
  output: {
    path: path.resolve(__dirname, './../dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: [/\.s[c|a]ss$/, /\.css$/],
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')(),
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader?name=images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, './../'),
    }),
    new StyleLintPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    ...generateHTMLPlugins(),
    (fs.existsSync(faviconSrc)) && new WebappWebpackPlugin({
      logo: faviconSrc,
      prefix: 'images/',
      favicons: {
        appName: null,
        appDescription: null,
        developerName: null,
        developerURL: null,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          windows: false,
          yandex: false,
        },
      },
    }),
    new WebpackBar(),
  ].filter(Boolean),
};
