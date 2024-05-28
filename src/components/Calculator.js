import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import '../styles/styles.css';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [storedValue, setStoredValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [awaitingNextValue, setAwaitingNextValue] = useState(false);

  const handleButtonClick = (value) => {
    if (typeof value === 'number' || value === '.') {
      if (awaitingNextValue) {
        setCurrentValue(String(value));
        setAwaitingNextValue(false);
      } else {
        setCurrentValue((prev) => (prev === '0' ? String(value) : prev + value));
      }
    } else if (value === 'C') {
      setCurrentValue('0');
      setStoredValue(null);
      setOperation(null);
      setAwaitingNextValue(false);
    } else if (value === '=') {
      if (operation && storedValue !== null) {
        const result = calculate(storedValue, currentValue, operation);
        setCurrentValue(result);
        setStoredValue(null);
        setOperation(null);
        setAwaitingNextValue(false);
      }
    } else {
      if (!awaitingNextValue) {
        if (operation && storedValue !== null) {
          const result = calculate(storedValue, currentValue, operation);
          setCurrentValue(result);
          setStoredValue(result);
        } else {
          setStoredValue(currentValue);
        }
        setAwaitingNextValue(true);
        setOperation(value);
      } else {
        setOperation(value);
      }
    }
  };
  // to calculate the operations
  const calculate = (value1, value2, operation) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    let result;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return 'ERROR';
    } // in case the result is negaive or too big
    if (result > 999999999 || result < 0) {
      return 'ERROR';
    }
    return String(result);
  };

  return (
    <div className="calculator">
      <Display value={currentValue} />
      <div className="calculator-keyboard">
        <Button label="7" value={7} onClick={handleButtonClick} className="calculator-keyboard_number_key" />
        <Button label="8" value={8} onClick={handleButtonClick} className="calculator-keyboard_number_key" />
        <Button label="9" value={9} onClick={handleButtonClick} className="calculator-keyboard_number_key" />
        <Button label="+" value="+" onClick={handleButtonClick} className="calculator-keyboard_operator_key" />

        <Button label="4" value={4} onClick={handleButtonClick} className="calculator-keyboard_number_key" />
        <Button label="5" value={5} onClick={handleButtonClick} className="calculator-keyboard_number_key" />
        <Button label="6" value={6} onClick={handleButtonClick} className="calculator-keyboard_number_key" />
        <Button label="-" value="-" onClick={handleButtonClick} className="calculator-keyboard_operator_key" />

        <Button label="1" value={1} onClick={handleButtonClick} className="calculator-keyboard_number_key" />
        <Button label="2" value={2} onClick={handleButtonClick} className="calculator-keyboard_number_key" />
        <Button label="3" value={3} onClick={handleButtonClick} className="calculator-keyboard_number_key" />
        <Button label="*" value="*" onClick={handleButtonClick} className="calculator-keyboard_operator_key" />

        <Button label="." value="." onClick={handleButtonClick} className="calculator-keyboard_number_key" />
        <Button label="0" value={0} onClick={handleButtonClick} className="calculator-keyboard_number_key" />
        <Button label="C" value="C" onClick={handleButtonClick} className="calculator-keyboard_number_key" />
        <Button label="/" value="/" onClick={handleButtonClick} className="calculator-keyboard_operator_key" />

        <Button label="=" value="=" onClick={handleButtonClick} className="calculator-keyboard_operator_key" style={{gridColumn: 'span 4'}} />
      </div>
    </div>
  );
};

export default Calculator;
