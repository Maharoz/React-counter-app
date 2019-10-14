import React from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from './components/controls';
import Display from './components/display';

function App() {
  return (
    <div className="App">
        <Display/>
        <Controls/>
    </div>
  );
}

export default App;
