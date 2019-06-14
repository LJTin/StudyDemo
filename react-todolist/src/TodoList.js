import React , { Component } from 'react'
import 'antd/dist/antd.css'
import { Input ,Button, List} from 'antd'
import store from './store/index'
import { getInputChangeAction, getAddItemAction, HandleItemDelete, getDeleteItemAction} from './store/actionCreators'

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render(){
    return (
      <div>
        <div>
          <Input placeholder='todoinfo' style={{width:300}} value={this.state.inputValue}
          onChange={this.handleInputChange}
          />
          <Button type='primary'
            onClick={this.handleClick}
          >tijiao</Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item,index)=>(<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
        ></List>
      </div>
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