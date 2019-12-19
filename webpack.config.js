const { join } = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const TerserPlugin = require("terser-webpack-plugin")
const { HotModuleReplacementPlugin } = require("webpack")

const isProd = process.env.NODE_ENV === "production"

console.log(`Webpack is in ${isProd ? "production" : "development"} mode`)

module.exports = {
  mode: isProd ? "production" : "development",
  devtool: isProd ? "source-map" : "inline-source-map",
  entry: join(__dirname, "src", "index.js"),
  output: {
    path: join(__dirname, "build"),
    filename: "js/app.bundle.js",
    chunkFilename: "js/[name].bundle.js",
  },
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: "image-webpack-loader",
        enforce: "pre",
        options: {
          mozjpeg: {
            progressive: true,
            quality: 50,
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.3, 0.65],
            speed: 6,
          },
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024,
              outputPath: "images",
              publicPath: "images",
            },
          },
        ],
      },
      {
        test: /\.(otf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              outputPath: "fonts",
              publicPath: "fonts",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.png",
    }),
    new CopyPlugin([{ from: "./public/_redirects", to: "./" }]),
    new HotModuleReplacementPlugin(),
  ],
}
