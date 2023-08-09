import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';
import { MissionProfile } from '../../components';

function Profile() {
  const rockets = useSelector((state) => state.rockets.Data.filter((rocket) => rocket.reserved));
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
                <td className="rocketdata">{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {missions.length === 0 ? (<p>no missions joined</p>)
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
