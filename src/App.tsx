import React from 'react';
import './App.css';
import CaesarCipher from './components/CaesarCipherForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Caesar Cipher</h1>
      </header>
      <main>
        <CaesarCipher />
      </main>
    </div>
  );
};

export default App;
