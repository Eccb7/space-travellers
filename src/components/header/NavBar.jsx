import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './navbar.css';

function NavBar() {
  return (
    <header className="app__header">
      <NavLink to="/" className="logo">
        <div className="app__header-logo_box">
          <img src={logo} alt="logo" className="app__header-logo" />
          <h1 className="app__header-title">Space Travellers&apos; Hub</h1>
        </div>
      </NavLink>
      <nav className="app__navbar">
        <ul>
          <li>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/Missions">Missions</NavLink>
          </li>
          <li>
            <NavLink to="/MyProfile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
