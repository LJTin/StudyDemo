import React , { Component } from 'react'
import 'antd/dist/antd.css'
import { Input ,Button, List} from 'antd'
import store from './store/index'

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = store.getState()
  }
  render(){
    return (
      <div>
        <div>
          <Input placeholder='todoinfo' style={{width:300}} value={this.state.inputValue}/>
          <Button type='primary'>tijiao</Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={item=>(<List.Item>{item}</List.Item>)}
        ></List>
      </div>
    )
  }
}

export default TodoList