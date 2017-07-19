import React from 'react'
import ReactDOM from 'react-dom'
// var element = React lives!
const dummyData = ['Work out', 'Watch GOT', 'Walk the dog', 'Eat healthy']
class Todo extends React.Component{
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <li> <button> X </button>
          {this.props.task}
        </li>
      )
    }
}

class TodoList extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <ul>
        {this.props.list.map((item) =>
          <Todo key={item} task={item} />
        )}
      </ul>
    )
  }
}

// class InputLine extends React.Component{
//   constructor(props) {
//     super(props);
//   }
// }

// class TodoApp extends React.Component{
//   constructor(props) {
//     super(props);
//   }
// }
ReactDOM.render(<TodoList list={dummyData}/>,
   document.getElementById('root'));
