import React, { Component } from 'react';
import Button from './Button.js';

export class Card extends Component {
  constructor() {
    super();

    this.state = {
      cardIndex: 0
    }
  }
  
  checkAnswer = (answer) => {
    this.setState({ cardIndex: this.state.cardIndex + 1 })
    answer === this.props.questions[this.state.cardIndex].correctAnswer
      ? this.answeredCorrectly()
      : this.props.displayMessage(false);
  }

  checkIndex = () => {
    if(this.state.cardIndex === this.props.questions.length - 1) {
      this.setState({cardIndex: 0})
    }
  }

  answeredCorrectly = () => {
    this.props.displayMessage(true)
    this.props.setToLocalStorage(this.props.questions[this.state.cardIndex])
  }

  render() {
    const { cardIndex } = this.state
    return (
      <div className="flashcard">
        <h3 className="prompt">{this.props.questions[cardIndex].prompt}</h3>
        <div className="answer-btns">
          <Button 
            answer={this.props.questions[cardIndex].possibleChoices[0]}
            checkAnswer={this.checkAnswer}
            checkIndex={this.checkIndex}
          />
          <Button 
            answer={this.props.questions[cardIndex].possibleChoices[1]}
            checkAnswer={this.checkAnswer}
            checkIndex={this.checkIndex}
          />
          <Button 
            answer={this.props.questions[cardIndex].possibleChoices[2]}
            checkAnswer={this.checkAnswer}
            checkIndex={this.checkIndex}
          />
        </div>
      </div>
    )
  }
}

export default Card