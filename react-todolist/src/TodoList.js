import React , { Component } from 'react'
import 'antd/dist/antd.css'

import store from './store/index'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render(){
    return (
      <TodoListUI 
      inputValue={this.state.inputValue}
      handleInputChange={this.handleInputChange}
      handleClick={this.handleClick}
      list={this.state.list}
      handleItemDelete={this.handleItemDelete}
      />
    )
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange () {
    this.setState(store.getState())
  }
  handleClick () {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete (index) {
    const action =getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList