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
    <div>
      <InputLine/>
      <ul>
        {this.props.todos.map((item) =>
          <Todo key={item.taskText} task={item.taskText} completed={item.completed} />
        )}
      </ul>
    </div>
    )
  }
}
export default TodoList
