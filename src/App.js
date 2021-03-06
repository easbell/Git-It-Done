import React, { Component } from 'react';
import CardContainer from './CardContainer.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      allData: [],
      correctGuesses: []
    }
  }

  fetchAllData() {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/lizTerminalAndGit')
      .then(response => response.json())
      .then(result => {
        this.setState({allData: result.lizTerminalAndGit}, () => {
          this.fetchFromLocalStorage();
        })
      })
      .catch(error => {
        console.log(error)
    }) 
  }

  componentDidMount() {
    this.fetchAllData();
  }

  fetchFromLocalStorage = () => {
    const storedQuestions = localStorage.getItem('correctQuestions')
    if(localStorage.length) {
      this.setState({correctGuesses: JSON.parse(storedQuestions)}, () => {
        this.renderIncorrectCards();
      })
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
    localStorage.clear();
    this.fetchAllData();
    this.setState({correctGuesses: []});
  }
  
  render() {
    const { allData, correctGuesses } = this.state
    return (
      <div className="App">
        {allData.length > 0 && 
          <div>
            <h3 className="title intro">All you need, to...</h3>
            <h1 className="title">Git It Done</h1>
            <p>You've gotten {correctGuesses.length} correct!</p>
            <button 
              className="reset" 
              onClick={this.resetStoredCards}>Reset Saved Cards</button>
            {correctGuesses.length === 30 && 
              <div className="end-of-game">
                <h4>Congrats, you got them all right!</h4>
                <h4>Press 'Reset Saved Cards' to play again.</h4>
              </div>
            }
            {correctGuesses.length < 30 && 
              <CardContainer
                questions={allData}
                setToLocalStorage={this.setToLocalStorage}
                correctGuesses={correctGuesses}
              />
            }
          </div>
        }
      </div>
    );
  }
}
export default App;