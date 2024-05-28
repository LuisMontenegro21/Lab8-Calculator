import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const NumberButton = Template.bind({});
NumberButton.args = {
  label: '1',
  value: 1,
  onClick: () => console.log('Clicked 1'),
};

export const OperatorButton = Template.bind({});
OperatorButton.args = {
  label: '+',
  value: '+',
  onClick: () => console.log('Clicked +'),
};

