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

  render() {
    const { allData } = this.state
    return (
      <div className="App">
        <h1 className="title">Git It Done</h1>
        <CardContainer
          allData={allData}
        />
      </div>
    );
  }
}

export default App;
