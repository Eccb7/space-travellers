import React from 'react';
import { Navbar } from '../../components';
import logo from '../../assets/logo.png';
import './header.css';

function Header() {
  return (
    <header className="app__header">
      <div className="app__header-logo_box">
        <img src={logo} alt="logo" className="app__header-logo" />
        <h1 className="app__header-title">Space Travellers</h1>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
