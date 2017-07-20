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
        <li> <button onClick={this.props.xClick}> X </button>
          {this.props.task}
        <button onClick={this.props.complete}> Complete </button>
        </li> :
        <li> <button onClick={this.props.xClick}> X </button>
          <strike>{this.props.task} </strike>
          <button onClick={this.props.complete}> Uncomplete </button>
        </li>

      )
    }
}
export default Todo
