import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

const displayMessageMock = jest.fn();
const setToLocalStorageMock = jest.fn();
const correctGuessesMock = jest.fn();

const mockCard = [
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
      questions={mockCard}
      displayMessage={displayMessageMock}
      setToLocalStorage={setToLocalStorageMock}
      correctGuesses={correctGuessesMock}
    />
  );

  it('should match snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have proper values for default states', () => {
    expect(wrapper.state()).toEqual({cardIndex: 0});
  });

  it('should change state and invoke a function when checkAnswer is called', () => {
    wrapper.setState( {cardIndex: 0} )

    wrapper.instance().checkAnswer('mkdir');
    expect(wrapper.state('cardIndex')).toEqual(1);

    wrapper.instance().checkAnswer('wefs');
    expect(wrapper.state('cardIndex')).toEqual(2);
  });

  it('should reset cardIndex when checkIndex is invoked', () => {
    wrapper.setState({cardIndex: 2});
    wrapper.instance().checkIndex();
    expect(wrapper.state('cardIndex')).toEqual(0);
  });

})