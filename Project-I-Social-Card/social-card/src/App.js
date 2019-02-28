import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import './App.css';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
