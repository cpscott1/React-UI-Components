import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator-wrapper">
      <div className="row1">0</div>

      <div className="row2">
        <ActionButton buttonStyle="btn" text="clear" />
        <NumberButton buttonStyle="btn-red" text="÷" />
      </div>
      <div className="row3">
        <NumberButton buttonStyle="btn" text="7" />
        <NumberButton buttonStyle="btn" text="8" />
        <NumberButton buttonStyle="btn" text="9" />
        <NumberButton buttonStyle="btn-red" text="x" />
      </div>
      <div className="row4">
        <NumberButton buttonStyle="btn" text="4" />
        <NumberButton buttonStyle="btn" text="5" />
        <NumberButton buttonStyle="btn" text="6" />
        <NumberButton buttonStyle="btn-red" text="-" />
      </div>
      <div className="row5">
        <NumberButton buttonStyle="btn" text="1" />
        <NumberButton buttonStyle="btn" text="2" />
        <NumberButton buttonStyle="btn" text="3" />
        <NumberButton buttonStyle="btn-red" text="+" />
      </div>
      <div className="row6">
        <ActionButton buttonStyle="btn" text="0" />
        <NumberButton buttonStyle="btn-red" text="=" />
      </div>
    </div>
  );
};

export default App;
