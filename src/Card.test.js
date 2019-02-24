import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow } from 'enzyme';

const displayMessageMock = jest.fn;
const guessWrongMock = jest.fn;

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


describe('Card', () => {
  const wrapper = shallow(
    <Card 
      questions={mockData}
      displayMessage={displayMessageMock}
      guessWrong={guessWrongMock}
    />
  );

  it('should match snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have proper values for default states', () => {
    expect(wrapper.state()).toEqual({cardIndex: 0});
  });

  it.skip('should invoke the correct function depending on if answer is right or wrong', () => {
    wrapper.instance().correctAnswer('mkdir');
  });

})