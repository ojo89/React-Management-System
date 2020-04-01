import React from 'react';
import logo from './404_Img_cyan.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>ADD on Tool</h1>
        </p>
        <a
          className="App-link"
          href="http://192.168.10.186:8080"
          target="_blank"
          rel="noopener noreferrer"
        >
          POLESTAR Automation V3
        </a>
      </header>
    </div>
  );
}

export default App;
