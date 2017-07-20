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
    this.removeTodo = this.removeTodo.bind(this);
    this.complete = this.complete.bind(this)
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
  removeTodo(index){
    // index.preventDefault()
    var taskArray = this.state.todos
    var newArray = taskArray.splice(index, 1)
    console.log(taskArray)
    this.setState({
      todos:taskArray
    })
  }
  complete(index) {
    console.log('this is index '+index);
    var taskArray = this.state.todos;
    taskArray[index].completed = !taskArray[index].completed
    console.log(taskArray[index].completed); this.setState({
      todos: taskArray
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
        <TodoList todos={this.state.todos} todoXClick={this.removeTodo} completeTask ={this.complete}/>
      </div>
    )
  }

}
export default TodoApp
