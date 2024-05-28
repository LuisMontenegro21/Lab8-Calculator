import React from 'react';

const Button = ({ label, onClick, className, value }) => (
  <button className={className} onClick={() => onClick(value)} data-value={value}>
    {label}
  </button>
);

export default Button;
