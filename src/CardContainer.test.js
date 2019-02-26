import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

const setToLocalStorageMock = jest.fn;
const correctGuessesMock = jest.fn;
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

describe('CardContainer', () => {
  const wrapper = shallow(
    <CardContainer
      allData={mockData}
      setToLocalStorage={setToLocalStorageMock}
      correctGuesses={correctGuessesMock}
    />
  );

  it('should match snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have proper values for default states', () => {
    expect(wrapper.state()).toEqual({guessCorrectly: ''});
  });

  it('should update state when displayMessage is invoked and true is passed in', () => {
    expect(wrapper.state()).toEqual({guessCorrectly: ''});
    wrapper.instance().displayMessage(true);
    expect(wrapper.state()).toEqual({guessCorrectly: true});
  });

  it('should update state when displayMessage is invoked and false is passed in', () => {
    expect(wrapper.state()).toEqual({guessCorrectly: true});
    wrapper.instance().displayMessage(false);
    expect(wrapper.state()).toEqual({guessCorrectly: false});
  });
  
})