import React from 'react'
import ReactDOM from 'react-dom'

import InputLine from './InputLine'
import TodoApp from './TodoApp'
import TodoList from './TodoList'
class Todo extends React.Component{
    constructor(props) {
      super(props);
    }
    render() {
      return(
        !this.props.completed ?
        <li> <button> X </button>
          {this.props.task}
        </li> :
        <li> <button> X </button>
          <strike>{this.props.task} </strike>
        </li>
      )
    }
}
export default Todo
