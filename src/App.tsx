import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={() => {
            window.location.href = 'https://reactjs.org';
          }}
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
