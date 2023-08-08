import React from 'react';
import PropTypes from 'prop-types';

function MissionFeature({ missionName, missionDesc }) {
  return (
    <tr>
      <td>{missionName}</td>
      <td>{missionDesc}</td>
    </tr>
  );
}

MissionFeature.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
};

export default MissionFeature;
