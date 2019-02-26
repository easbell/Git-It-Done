import React, { Component } from 'react';
import Card from './Card.js';

export class CardContainer extends Component {
  constructor() {
    super();

    this.state = {
      guessCorrectly: ''
    }
  }

  displayMessage = (message) => {
    message ? this.setState({guessCorrectly: true}) 
            : this.setState({guessCorrectly: false})
    setTimeout(() => {
      this.setState({guessCorrectly: ''})
    }, 1000)
  }
  
  render() {
    return (
      <div className="card-container">
        {
        <div>
          <Card 
            questions={this.props.questions}
            displayMessage={this.displayMessage}
            setToLocalStorage={this.props.setToLocalStorage}
            correctGuesses={this.props.correctGuesses}
          />
        </div>
        }
        <div className="guess-message">
          {this.state.guessCorrectly &&
            <p>You're Right!</p>
          }
          {this.state.guessCorrectly === false &&
            <p>That's wrong!</p>
          }
        </div>
      </div>
    )
  }
}

export default CardContainer
