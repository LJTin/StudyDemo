const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //多入口写成对象
  entry:{
    home:"./src/index.js",
    other:'./src/other.js'
  },
  output:{
    filename:'[name].js', // name对应home和other，也可以加hash戳
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:"./index.html",
      filename:'home.html',
      chunks:['home'] //加载代码块，每个页面对应加载自己的js代码
    }),
    new HtmlWebpackPlugin({
      template:"./index.html",
      filename:'other.html',
      chunks:['other']
    }),
  ]
}