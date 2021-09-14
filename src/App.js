import React, { useState } from 'react';
import Navigation from './components/navigation';
import Home from './components/home'
import SelectProvider from './context/selectContext'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <SelectProvider>
        <Navigation />
        <Home />
      </SelectProvider>
    </div>
  );
}

export default App;
