import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Componentes/Header';
import Cuenta from './Componentes/MostrarSaldo';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Cuenta/>
      </div>
    );
  }
}

export default App;
