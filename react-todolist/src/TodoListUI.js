import React from 'react'
import { Input ,Button, List} from 'antd'

//无状态组件，不是一个类，没有生命周期，性能更优
const TodoListUI = (props) =>{
  return (
    <div>
        <div>
          <Input placeholder='todoinfo' style={{width:300}} value={props.inputValue}
          onChange={props.handleInputChange}
          />
          <Button type='primary'
            onClick={props.handleClick}
          >tijiao</Button>
        </div>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item,index)=>(<List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
        ></List>
      </div>
  )
}

export default TodoListUI