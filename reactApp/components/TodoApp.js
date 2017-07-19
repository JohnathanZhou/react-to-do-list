import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './Todo'
import InputLine from './InputLine'
import TodoList from './TodoList'
const dummyData = [
  { taskText: "Work out", completed: false },
  { taskText: "Watch GOT", completed: false },
  { taskText: "Eat unhealthy", completed: true },
  { taskText: "Do laundry", completed: false }
]
class TodoApp extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      todos:[]
    }
  }
  componentDidMount(){
    this.setState({
     todos:dummyData
    })
  }
  render(){
    return (
      <div>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }

}
export default TodoApp
