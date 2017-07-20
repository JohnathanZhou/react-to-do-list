import React from 'react'
import ReactDOM from 'react-dom'
class InputLine extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      typeText:""
    }
    this.handleTyping = this.handleTyping.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleTyping(event){
    this.setState({
      typeText:event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault()
    console.log('this is typetext: ' +this.state.typeText)
    this.props.submit(this.state.typeText);
    this.setState({
      typeText:""
    })
  }
  render() {
    return(
      <form method='post' action='localhost:3000/db/add'>
        <input onChange = {this.handleTyping} value = {this.state.typeText} type="text" placeholder="task" />
        <button  onClick = {this.handleSubmit} type='submit'
          > Add todo </button>
      </form>
    )
  }
}

export default InputLine
