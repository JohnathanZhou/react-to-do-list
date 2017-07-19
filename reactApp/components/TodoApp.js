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
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(event){
    console.log("this is event " + event);
    var taskArray = this.state.todos;
    var newObj= {
      taskText: event,
      completed:false
    }
    taskArray.push(newObj);
    console.log("this is your new object",newObj);
    console.log("This is your taskArray", taskArray);
    this.setState({
      todos:taskArray
    })

  }
  componentDidMount(){
    this.setState({
     todos:dummyData
    })
  }
  render(){
    return (
      <div>
        <InputLine submit={this.addTodo} />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }

}
export default TodoApp
