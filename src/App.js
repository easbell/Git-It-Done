import React, { Component } from 'react';
import CardContainer from './CardContainer.js';
import data from './liz-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      allData: data.terminalAndGit
    }
  }

  setToLocalStorage = (incorrectAnswers) => {
    const stringifiedQuestions = JSON.stringify(incorrectAnswers)
    localStorage.setItem('savedQuestions', stringifiedQuestions)
  }
  
  render() {
    const { allData } = this.state
    return (
      <div className="App">
        <h3 className="title intro">All you need, to...</h3>
        <h1 className="title">Git It Done</h1>
        <CardContainer
          allData={allData}
          setToLocalStorage={this.setToLocalStorage}
        />
      </div>
    );
  }
}

export default App;
