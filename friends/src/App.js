import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavMenu from './components/NavMenu/NavMenu';
import LoginForm from './components/LoginForm/LoginForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <h2>Just yer good ol App Component</h2>
    </div>
  );
}

export default App;