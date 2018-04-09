const path = require("path");

module.exports = {
  /*入口*/
  entry: path.join(__dirname, "src/index.js"),

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
    chunkFilename: "[name].js"
  },
  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader?cacheDirectory=true"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    port: 8084,
    historyApiFallback: true,
    host: "172.16.65.77",
    proxy: {
      "/zhihu": {
        target: "https://news-at.zhihu.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/zhihu/": "/api/4/"
        }
      }
    }
  },
  resolve: {
    alias: {
      components: path.join(__dirname, "src/components"),
      component: path.join(__dirname, "src/component"),
      router: path.join(__dirname, "src/router"),
      actions: path.join(__dirname, "src/redux/actions"),
      reducers: path.join(__dirname, "src/redux/reducers")
    }
  },
  devtool: "inline-source-map"
};
