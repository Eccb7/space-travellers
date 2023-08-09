import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import './profile.css';

// Create a memoized selector using createSelector
const selectReservedRockets = createSelector(
  (state) => state.rockets.Data,
  (rockets) => rockets.filter((rocket) => rocket.reserved),
);

function Profile() {
  // Use the memoized selector to get reserved rockets
  const rockets = useSelector(selectReservedRockets);

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
    </div>
  );
}

export default Profile;
