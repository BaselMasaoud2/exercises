import React from 'react';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="exercise1-container">
          <Exercise1 />
        </div>
        <div id="exercise2-container">
          <Exercise2 />
        </div>
      </header>
    </div>
  );
}

export default App;
