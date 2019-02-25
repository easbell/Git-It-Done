import React, { Component } from 'react';
import CardContainer from './CardContainer.js';
import data from './liz-data.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      allData: data.terminalAndGit,
      correctGuesses: []
    }
  }

  componentWillMount = () => {
    const storedQuestions = localStorage.getItem('correctQuestions')
    if(localStorage.length > 0) {
      this.setState({correctGuesses: JSON.parse(storedQuestions)}, () => {
      this.renderIncorrectCards();
      });
    }
  }

  renderIncorrectCards = () => {
    let index;
    const { allData, correctGuesses } = this.state;
      correctGuesses.forEach(guess => {
        let found = allData.find(el => {
          return el.id === guess.id
        })
        index = allData.indexOf(found);
        allData.splice(index, 1)
      })
    this.setState({allData: allData})
  }

  setToLocalStorage = (correctGuess) => {
    const rightGuesses = [...this.state.correctGuesses, correctGuess]
    this.setState({correctGuesses: rightGuesses}, () => {
      const stringifiedQuestions = JSON.stringify(rightGuesses)
      localStorage.setItem('correctQuestions', stringifiedQuestions)
    })
  }

  resetStoredCards = () => {
    localStorage.clear()
    this.setState({correctGuesses: []});
  }
  
  render() {
    const { allData, correctGuesses } = this.state
    return (
      <div className="App">
        <h3 className="title intro">All you need, to...</h3>
        <h1 className="title">Git It Done</h1>
        <p>You've gotten {correctGuesses.length} correct!</p>
        <button 
          className="reset" 
          onClick={this.resetStoredCards}>Reset Saved Cards</button>
        {correctGuesses.length === 30 && 
          <div>
            <h4>Congrats, you got them all right!</h4>
            <h4>Press 'Reset Saved Cards' to play again.</h4>
          </div>
        }
        {correctGuesses.length < 30 && 
          <CardContainer
            allData={allData}
            setToLocalStorage={this.setToLocalStorage}
            correctGuesses={this.state.correctGuesses}
          />
        }
      </div>
    );
  }
}
export default App;
