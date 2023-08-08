import React from 'react';
import PropTypes from 'prop-types';
import './missionFeature.css';

function MissionFeature({ missionName, missionDesc }) {
  return (
    <tr>
      <td className="app_mission-title">{missionName}</td>
      <td>{missionDesc}</td>
    </tr>
  );
}

MissionFeature.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
};

export default MissionFeature;
