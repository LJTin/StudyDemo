const defaultState = {
  inputValue:'23',
  list:[1,2,3,4]
}
// reducer可以接收state，但不能修改，符合单向数据流
export default (state = defaultState, action)=>{
  if(action.type=== 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue =  action.value;
    return newState
  }
  if(action.type === 'add_todo_item'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    console.log(newState)
    return newState
  }
  if(action.type === 'delete_item'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1)
    return newState
  }
  return state;
}