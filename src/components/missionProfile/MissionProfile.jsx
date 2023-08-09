import React from 'react';
import PropTypes from 'prop-types';
import './missionProfile.css';

function MissionProfile({ missionName }) {
  return (
    <tr className="app_mission_profile-row">
      <td className="app_mission_profile-title">{missionName}</td>
    </tr>
  );
}

MissionProfile.propTypes = {
  missionName: PropTypes.string.isRequired,
};

export default MissionProfile;
