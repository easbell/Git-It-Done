import React, { Component } from 'react';
import Card from './Card.js';
import './CardContainer.css';

export class CardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guessCorrectly: ''
    }
  }

  displayMessage = (boolean) => {
    if(boolean) {
      this.setState({guessCorrectly: true})
      setTimeout(() => {
        this.setState({guessCorrectly: ''})
      }, 1000)
    } else {
      this.setState({guessCorrectly: false})
      setTimeout(() => {
        this.setState({guessCorrectly: ''})
      }, 1000)
    }
  }
  
  render() {
    return (
      <div className="card-container">
        <div className="guess-message">
          {this.state.guessCorrectly &&
            <div>
              <h4>You're Right!</h4>
            </div>
          }
          {this.state.guessCorrectly === false &&
            <div>
              <h4>Shiiet that's wrong!</h4>
            </div>
          }
        </div>
        {
        <div>
          <Card 
            questions={this.props.allData}
            displayMessage={this.displayMessage}
          />
        </div>
        }
      </div>
    )
  }
}

export default CardContainer
