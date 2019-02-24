import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

const setToLocalStorageMock = jest.fn;
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
      setToLocalStorageMock={setToLocalStorageMock}
    />
  );

  it('should match snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have proper values for default states', () => {
    expect(wrapper.state()).toEqual({guessCorrectly: '', incorrectGuesses: []});
  });

  it('should update state and invoke method when guessWrong is invoke', () => {
    expect(wrapper.state('incorrectGuesses')).toEqual([]);
    wrapper.instance().guessWrong(mockData[0]);
    expect(wrapper.state('incorrectGuesses')).toEqual([mockData[0]])
    expect(setToLocalStorageMock).toBeCalled();
  });
  
})