import React, { useState } from 'react';
import Display from './components/display';
import Keypad from './components/keyboard';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setExpression(eval(expression).toString());
      } catch {
        setExpression('Error');
      }
    } else if (value === 'C') {
      setExpression('');
    } else {
      setExpression(expression + value);
    }
  };

  return (
      <div className="calculator">
        <h1>Salam Aleykum to my Calaculator!</h1>
        <Display expression={expression}/>
        <Keypad onButtonClick={handleButtonClick}/>
      </div>
  );
}

export default App;
