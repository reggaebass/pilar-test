import React, { useState } from 'react';
import Content from './components/content';
import SelectProvider from './context/selectContext'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <SelectProvider>
        <Content />
      </SelectProvider>
    </div>
  );
}

export default App;
