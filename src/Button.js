import React, { Component } from 'react'

export class Button extends Component {
  sendAnswer = () => {
    this.props.checkAnswer(this.props.answer)
    this.props.checkIndex();
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
