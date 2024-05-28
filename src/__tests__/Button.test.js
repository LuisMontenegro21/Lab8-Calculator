import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

test('renders Button component', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button label="1" value={1} onClick={handleClick} />);
  const button = getByText('1');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledWith(1);
});
