import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link,
} from 'react-router-dom';
import logo from '../../assets/logo.png';
import './navlink.css';
import { Rockets, Missions, Profile } from '../index';

function Navigation() {
  return (
    <header className="app__header">
      <div className="app__header-logo_box">
        <img src={logo} alt="logo" className="app__header-logo" />
        <h1 className="app__header-title">Space Travellers</h1>
      </div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <Link to="/">Rockets</Link>
          </li>
          <li>
            <Link to="/Missions">Missions</Link>
          </li>
          <li>
            <Link to="/Profile">My Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function NavLink() {
  return (
    <Router>
      <div className="nav-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavLink;
