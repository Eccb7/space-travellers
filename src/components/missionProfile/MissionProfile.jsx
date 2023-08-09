import React from 'react';
import PropTypes from 'prop-types';
import './missionProfile.css';

function MissionProfile({ missionName }) {
  return (
    <tr>
      <td className="app_mission-title">{missionName}</td>
    </tr>
  );
}

MissionProfile.propTypes = {
  missionName: PropTypes.string.isRequired,
};

export default MissionProfile;
