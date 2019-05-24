import React, { Component} from 'react'
import PropTypes from 'prop-types'

class ToDoItem extends Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.content !== this.props.content){
      return true
    }else{
      return false
    }
  }
  render(){
    const {content} = this.props
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }
  handleClick(){
    const {deleteItem , index } = this.props
    deleteItem(index)
  }
  //一个组件从父组件中接收props
  // 第一次存在于父组件中，不会被执行，
  // 如果之前已经存在了，才会执行
  componentWillReceiveProps(){
    console.log('chid componentWillReceiveProps')
  }
  // 卸载
  componentWillUnmount(){
    console.log('child componentwillunmount')
  }
}

ToDoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

ToDoItem.defaultProps = {
  test: '1111'
}
export default  ToDoItem




