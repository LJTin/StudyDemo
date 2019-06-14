import React, {Component} from 'react'
import { Input ,Button, List} from 'antd'

class TodoListUI extends Component {
  render(){
    return (
      <div>
        <div>
          <Input placeholder='todoinfo' style={{width:300}} value={this.props.inputValue}
          onChange={this.props.handleInputChange}
          />
          <Button type='primary'
            onClick={this.props.handleClick}
          >tijiao</Button>
        </div>
        <List
          bordered
          dataSource={this.props.list}
          renderItem={(item,index)=>(<List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
        ></List>
      </div>
    )
  }
}

export default TodoListUI