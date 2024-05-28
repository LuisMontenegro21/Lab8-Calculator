import React from 'react';
import { render } from '@testing-library/react';
import Display from '../components/Display';

test('renders Display component', () => {
  const { getByText } = render(<Display value="123" />);
  const display = getByText('123');
  expect(display).toBeInTheDocument();
});
