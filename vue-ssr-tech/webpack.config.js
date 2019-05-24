const path = require('path') // 文件路径
const HTMLPlugin = require('html-webpack-plugin') // 用于网页承载，渲染
const VueLoaderPlugin = require('vue-loader/lib/plugin') // webpack4以后必须使用此插件
const webpack = require('webpack')

const isDev =process.env.NODE_ENV === 'development'

const config = {
  target: 'web', //编译目标平台
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-aaa.[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(), 
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      } // 
    }), // 框架都需要用到的插件
    new HTMLPlugin()
  ]
}

if (isDev) {
  config.devtool = '#cheap-mpdule-eval-source-map'
  config.devServer = {
    port: 8000,
    host: '0.0.0.0', // 0.0.0.0可以用localhost，ip地址，127.0.0.1访问，但是localhost只能通过locahost访问
    overlay: {
      errors: true //网页上报错
    },
    open: false, // 自动打开浏览器
    hot: true // 单个组件重载，而不是整个页面重载
  },
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}

module.exports = config