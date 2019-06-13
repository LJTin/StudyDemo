import React,{ Component,Fragment}  from 'react';
import ToDoItem from './ToDoItem'
import axios from 'axios'
import './style.css'

const Mock = require('mockjs')
const data = Mock.mock('@range(3,7)')
console.log(data,'data')
export default class ToDoList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue:'23232',
      list:data
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render(){
    console.log('render')
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input 
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input)=>{this.input = input}}
          />
          <button
            onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul)=>{this.ul = ul}}>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
  getTodoItem(){
    return this.state.list.map((item,index)=>{
      return ( 
        <ToDoItem 
          key={index}
          content={item} 
          index={index}
          deleteItem={this.handleItemDelete}
        ></ToDoItem>
      )
    })
  }
  handleInputChange(e){
    // const value = e.target.value
    const value = this.input.value
    this.setState(()=>({
      inputValue:value
    }))
  }
  handleBtnClick(){
    // setState的传参数！！！！第二个参数为func，效果类似this.nexttick
    this.setState((prevState)=>({
      list:[...prevState.list,prevState.inputValue],
      inputValue:''
    }),()=>{console.log(this.ul.querySelectorAll('div').length)})
  }
  handleItemDelete(index){
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index,1)
      return {list}
    })
  }
  //组建被挂载页面之前执行
  componentWillMount(){
    console.log('willmount')

  }
  //组建被挂载页面之后执行
  componentDidMount(){
    //一般ajax请求在这个生命周期中
    axios.get('/api/todolist').then(()=>{alert('success')}).catch(()=>{alert('error')})
    console.log('Didmount')
  }
  // 组件被更新前，自动被执行,true或false
  shouldComponentUpdate(){
    console.log('shouldcomponentupdate')
    return true
  }
  //组件被更新之前会自动执行，但在shouldcomponentupdate返回true执行
  componentWillUpdate(){
    console.log("componentWillUpdate")
  }
  //组建更新完成执行
  componentDidUpdate(){
    console.log('componentdidupdate')
  }
  
}