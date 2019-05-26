const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  mode:'development',//打包模式development production
  entry: './src/index.js',
  output:{
    filename:'bundle.[hash:8].js', //hash解决缓存的问题,:8只显示8位的hash戳
    path:path.resolve(__dirname,'dist'), // 绝对路径,当前目录下的dist
    //publicPath:'', //最外层的路径
  },
  devServer:{ // 开发服务器的配置，不配置默认8080端口
    port: 3000,
    progress: true,
    contentBase: './dist', //静态文件的目录
    //open:true,  自动打开浏览器
    compress:true // gzip压缩
  },
  plugins:[ //数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:"index.html",
      minify:{
        removeAttributeQuotes:true, // 删除html中的引号
        collapseWhitespace:true, //一行
      },
      hash:true, // hash戳
    }),
    //抽离css
    new MiniCssExtractPlugin({
      filename:'main.css',
    })
  ],
  module:{
    rules:[//loader执行顺序：从右向左从下到上
      //loader还可以写成对象，可以传更多的配置
      {
        test:/\.png|jpg|gif$/,
        use:{
         loader: 'url-loader',
         options:{
           limit:200*1024, //做限制用base64转化，超过就用file-loader
           outputPath:'img/', //图片放在img目录下
           //publicPath:'',//使用cdn的域名
         }
        }
      },
      {
        test:/\.js$/,
        use:{
          loader:'eslint-loader',
          options:{
            enforce:'pre' //强制在之前执行 previous前 post后
          }
        }
      },
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader',
          options:{ // 用babel-loader把es6转es5
            presets:[
              '@babel/preset-env'
            ],
            plugins:[ // 转class类
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-runtime'
            ]
          }
        },
        include:path.resolve(__dirname,'src'),//包括
        exclude:/node_modules/,//排除
        
      },
      { //css-loader负责解析@import语法
        //style-loader将css插入head标签中
        
        test:/\.css$/,
        use:[
          // {
          //   loader:'style-loader',
          //   options:{
          //     insertAt:'top'
          //   }
          // },
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      { 
        test:/\.less$/,
        use:[
          // {
          //   loader:'style-loader',
          //   options:{
          //     insertAt:'top'
          //   }
          // },
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
    
  },
  optimization:{ //优化项
    minimizer:[
      new UglifyJsPlugin({
        cache: true, //缓存
        parallel: true, //并行压缩
        sourceMap:true, //js压缩前后的源码映射
      }),
      new OptimizeCssAssetsWebpackPlugin() //css压缩
    ]
  },
  externals:{
    //排除一些第三方引入的script
  }
}