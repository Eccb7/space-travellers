import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  NavBar, Rockets, Missions, Profile,
} from './containers';
import './index.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
