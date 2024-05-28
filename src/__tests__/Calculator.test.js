import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('should add two numbers', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByText('5')).toBeInTheDocument();
});

test('should subtract two numbers', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByText('3')).toBeInTheDocument();
});

test('should multiply two numbers', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByText('10')).toBeInTheDocument();
});

test('should divide two numbers', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByText('4')).toBeInTheDocument();
});
