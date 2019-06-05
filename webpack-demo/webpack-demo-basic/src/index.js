require('@babel/polyfill') // 兼容api

let str = require('./a.js')

console.log(str+'1232')

require('./index.css')
require('./index.less')

let fn = () =>{
  console.log(1)        
  console.log(2)
}
fn()

class A{
  a = 1
}
let a = new A()
console.log(a.a)


'aaaaa'.includes('a');



//webpack打包图片
//1.js创建图片
// file-loader 默认生成
import logo from './logo.png' //把图片引入，返回一个新的图片地址
let image = new Image()
//image.src='./logo.png' //一个字符串
image.src=logo
document.body.appendChild(image)
//2.css引入background(url)

//3.<img src=''/>