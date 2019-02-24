import React, { Component } from 'react';
import Button from './Button.js';

export class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardIndex: 0
    }
  }
  
  checkAnswer = (answer) => {
    const { cardIndex } = this.state
    const { questions, displayMessage } = this.props
    this.setState({ cardIndex: this.state.cardIndex + 1 })
    answer === questions[cardIndex].correctAnswer
      ? this.answeredCorrectly()
      : displayMessage(false);
  }

  answeredCorrectly = () => {
    const { cardIndex } = this.state
    const { displayMessage, guessRight } = this.props
    displayMessage(true)
    guessRight(this.props.questions[cardIndex])
  }
    
  render() {
    const { cardIndex } = this.state
    return (
    <div>
      <div className="flashcard">
        <h3 className="prompt">{this.props.questions[cardIndex].prompt}</h3>
        <div className="answer-btns">
          <Button 
            answer={this.props.questions[cardIndex].possibleChoices[0]}
            checkAnswer={this.checkAnswer}
          />
          <Button 
            answer={this.props.questions[cardIndex].possibleChoices[1]}
            checkAnswer={this.checkAnswer}
          />
          <Button 
            answer={this.props.questions[cardIndex].possibleChoices[2]}
            checkAnswer={this.checkAnswer}
          />
        </div>
      </div>
    </div>
    )
  }
}

export default Card
