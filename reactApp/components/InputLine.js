import React from 'react'
import ReactDOM from 'react-dom'
class InputLine extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <form>
        <input type="text" placeholder="task" />
        <button type='submit'> Add todo </button>
      </form>
    )
  }
}

export default InputLine
