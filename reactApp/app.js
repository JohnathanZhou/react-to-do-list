import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './components/Todo.js'
import InputLine from './components/InputLine.js'
import TodoApp from './components/TodoApp.js'
import TodoList from './components/TodoList.js'
// var element = React lives!
const dummyData = [
  { taskText: "Work out", completed: false },
  { taskText: "Watch GOT", completed: false },
  { taskText: "Eat unhealthy", completed: true },
  { taskText: "Do laundry", completed: false }
]
// class Todo extends React.Component{
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return(
//         this.props.completed ?
//         <li> <button> X </button>
//           {this.props.task}
//         </li> :
//         <li> <button> X </button>
//           <strike>{this.props.task} </strike>
//         </li>
//       )
//     }
// }

// class TodoList extends React.Component{
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return(
//     <div>
//       <InputLine/>
//       <ul>
//         {this.props.todos.map((item) =>
//           <Todo key={item.taskText} task={item.taskText} completed={item.completed} />
//         )}
//       </ul>
//     </div>
//     )
//   }
// }

// class InputLine extends React.Component{
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return(
//       <form>
//         <input type="text" placeholder="task" />
//         <button type='submit'> Add todo </button>
//       </form>
//     )
//   }
// }

// class TodoApp extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state= {
//       todos:[]
//     }
//   }
//   componentDidMount(){
//     this.setState({
//      todos:dummyData
//     })
//   }
//   render(){
//     return (
//       <div>
//         <TodoList todos={this.state.todos}/>
//       </div>
//     )
//   }
//
// }
ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
