import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import './profile.css';
import { MissionProfile } from '../../components';

// Create a memoized selector for reserved rockets using createSelector
const selectReservedRockets = createSelector(
  (state) => state.rockets.Data,
  (rockets) => rockets.filter((rocket) => rocket.reserved),
);

function Profile() {
  // Use the memoized selector to get reserved rockets
  const rockets = useSelector(selectReservedRockets);

  const missions = useSelector((state) => state.mission.missions
    .filter((mission) => mission.reserved));

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
                  <MissionProfile
                    key={mission.mission_id}
                    missionName={mission.mission_name}
                    missionMore={mission.wikipedia}
                  />
                ))
              }
            </tbody>
          </table>
        )}
    </div>
  );
}

export default Profile;
