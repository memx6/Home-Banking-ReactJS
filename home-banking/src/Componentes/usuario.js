import React, { Component } from 'react';
import '../App.css';
import {nombreUsuario} from '../homebanking.js';

class Usuario extends Component {
    constructor(props){
        super(props)
        this.nombre = nombreUsuario
    }
    render() {
      return (
        <div className="Usuario">
      <div className="align-left">
        <p className="nombre">Bienvenido/a {nombreUsuario}</p>
      </div>
    </div>
      );
    }
  }
  
  export default Usuario;