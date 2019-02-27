import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

const checkAnswerMock = jest.fn();
const checkIndexMock = jest.fn();

const mockChoice = "cdir";

describe('Button', () => {
  const wrapper = shallow(
    <Button 
      answer={mockChoice}
      checkAnswer={checkAnswerMock}
      checkIndex={checkIndexMock}
    />
  );

  it('should match snapshot with all props passed in', () => {
      expect(wrapper).toMatchSnapshot();
  });
})