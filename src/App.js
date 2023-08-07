import React from 'react';
import {
  NavLink, Rockets, Missions, Profile,
} from './containers';

function App() {
  return (
    <div>
      <NavLink />
      <Rockets />
      <Missions />
      <Profile />
    </div>
  );
}

export default App;
