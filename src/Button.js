import React, { Component } from 'react'

export class Button extends Component {
  
  
  sendAnswer = () => {
    const {checkAnswer} = this.props
    checkAnswer(this.props.answer)
  }

  render() {
    return (
      <div>
        <button onClick={this.sendAnswer}>{this.props.answer}</button>
      </div>
    )
  }
}

export default Button
