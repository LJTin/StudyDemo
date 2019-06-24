import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_ITEM,INIT_LIST_ACTION} from './actionTypes'

const defaultState = {
  inputValue:'',
  list:[]
}
// reducer可以接收state，但不能修改，符合单向数据流
export default (state = defaultState, action)=>{
  if(action.type=== CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue =  action.value;
    return newState
  }
  if(action.type=== INIT_LIST_ACTION){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list =  action.data;
    return newState
  }
  if(action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    console.log(newState)
    return newState
  }
  if(action.type === DELETE_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1)
    return newState
  }
  return state;
} 