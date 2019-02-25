import React, { Component } from 'react'

export class Button extends Component {
  sendAnswer = () => {
    const {checkAnswer, checkIndex} = this.props
    checkAnswer(this.props.answer)
    checkIndex();
  }

  render() {
    return (
      <div>
        <button onClick={this.sendAnswer}>
                {this.props.answer}
        </button>
      </div>
    )
  }
}

export default Button
