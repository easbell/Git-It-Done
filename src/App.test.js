import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

const mockData = [
  {
    "id": 1,
    "prompt": "Make a directory",
    "possibleChoices": ["cdir", "mkdir", "newdir"],
    "correctAnswer": "mkdir",
    "save": false
  },
  {
    "id": 2,
    "prompt": "Change directory",
    "possibleChoices": ["change", "cngdir", "cd"],
    "correctAnswer": "cd",
    "save": false
  },
  {
    "id": 3,
    "prompt": "Go to previous directory",
    "possibleChoices": ["cd ..", "cd .", "prev .."],
    "correctAnswer": "cd ..",
    "save": false
  }
]
const mockCorrectGuesses = [
  {
  "id": 1,
  "prompt": "Make a directory",
  "possibleChoices": ["cdir", "mkdir", "newdir"],
  "correctAnswer": "mkdir",
  "save": false
  }
]
const mockUpdatedData = [
  {"correctAnswer": "cd", "id": 2, "possibleChoices": ["change", "cngdir", "cd"], "prompt": "Change directory", "save": false}, {"correctAnswer": "cd ..", "id": 3, "possibleChoices": ["cd ..", "cd .", "prev .."], "prompt": "Go to previous directory", "save": false}]

describe('App', () => {
  let wrapper;
  let MockFn = jest.fn();
  
  beforeEach(() => {
    wrapper = shallow(
      <App 
        resetStoredCards={MockFn}
      />
    );
  })

  it('should match a snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have proper values for default states', () => {
    expect(wrapper.state()).toEqual({allData: [], correctGuesses: []});
  });

  it('should update state based on correctGuesses', () => {
    wrapper.setState( {allData: mockData, correctGuesses: mockCorrectGuesses} )
    wrapper.instance().renderIncorrectCards();
    expect(wrapper.state('allData')).toEqual(mockUpdatedData)
  });

  it('should invoke resetStoredCards when reset button is clicked', () => {
    wrapper.instance().resetStoredCards = jest.fn()

    wrapper.setState( {allData: mockData, correctGuesses: mockCorrectGuesses} )
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().resetStoredCards).toHaveBeenCalled();
  });
});