import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import './profile.css';
import { MissionProfile } from '../../components';

import { selectReservedRockets } from '../../redux/rockets/rocketsSlice';
import { createSelector } from 'reselect';

// Create a memoized selector for reserved missions
const selectReservedMissions = createSelector(
  (state) => state.mission.missions,
  (missions) => missions.filter((mission) => mission.reserved)
);

// Create a memoized selector using createSelector
const selectReservedRockets = createSelector(
  (state) => state.rockets.Data,
  (rockets) => rockets.filter((rocket) => rocket.reserved),
);

function Profile() {
  const rockets = useSelector(selectReservedRockets);
  const missions = useSelector(selectReservedMissions);

  return (
    <div className="my-profile-container">
      <h2>My Profile</h2>
      <div className="sectionTitle">My Rockets</div>
      {rockets.length === 0 ? (
        <p>No rockets reserved yet!</p>
      ) : (
        <table className="holderTable">
          <tbody>
            {rockets.map((rocket) => (
              <tr key={rocket.id} className="rocketrow">
                <td className="rocketdata">
                  {rocket.name}
                  <a href={rocket.wikipedia} target="_blank" rel="noreferrer">Read more</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {missions.length === 0 ? (<p>No missions joined</p>)
        : (
          <table className="holderTable">
            <thead>
              <tr className="app_mission_profile-row">
                <th className="app_mission_profile-column">My Missions</th>
              </tr>
            </thead>
            <tbody>
              {
                missions.map((mission) => (
                  <MissionProfile key={mission.mission_id} missionName={mission.mission_name} />
                ))
              }
            </tbody>
          </table>
        )}
    </div>
  );
}

export default Profile;
