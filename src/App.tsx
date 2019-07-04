import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/StartServerButton'
import { ServerStatus } from './components/ServerStatus';
import { StartServerButton } from './components/StartServerButton';
import { StopServerButton } from './components/StopServerButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ServerStatus />
        <StartServerButton />
        <StopServerButton />
      </header>
    </div>
  );
}

export default App;
