import React, { Component } from 'react';
import '../App.css';
import logo from '../img/logo.png';
import Usuario from './usuario';

class Header extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
      return (
        <div className="header">
      <img className="logo" src={logo}/>
      <div className="align-left">
        <Usuario/>
      </div>
    </div>
      );
    }
  }

  export default Header;