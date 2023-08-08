import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

function Profile() {
  const rockets = useSelector((state) => state.rockets.Data.filter((rocket) => rocket.reserved));

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
    </div>
  );
}

export default Profile;
