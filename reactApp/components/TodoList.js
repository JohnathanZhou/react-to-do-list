import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './Todo'
import InputLine from './InputLine'
class TodoList extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <ul>
        {this.props.todos.map((item) =>
          <Todo key={item.taskText + item.completed} task={item.taskText} completed={item.completed} />
        )}
      </ul>
    )
  }
}
export default TodoList
