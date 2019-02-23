import React, { Component } from 'react';
import Button from './Button.js';
import './Card.css';

export class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardIndex: 0
    }
  }
  
  correctAnswer = (answer) => {
    const { cardIndex } = this.state
    const { questions, displayMessage } = this.props
    this.setState({ cardIndex: this.state.cardIndex + 1 })
    answer === questions[cardIndex].correctAnswer
      ? displayMessage(true)
      : this.answeredWrong();
  }

  answeredWrong = () => {
    const { cardIndex } = this.state
    const { displayMessage, guessWrong } = this.props
    displayMessage(false)
    guessWrong(this.props.questions[cardIndex])
  }
    
  render() {
    const { cardIndex } = this.state
    return (
    <div className="flashcard">
      <h3>{this.props.questions[cardIndex].prompt}</h3>
      <div>
        <Button 
          answer={this.props.questions[cardIndex].possibleChoices[0]}
          correctAnswer={this.correctAnswer}
        />
        <Button 
          answer={this.props.questions[cardIndex].possibleChoices[1]}
          correctAnswer={this.correctAnswer}
        />
        <Button 
          answer={this.props.questions[cardIndex].possibleChoices[2]}
          correctAnswer={this.correctAnswer}
        />
      </div>
    </div>
    )
  }
}

export default Card
