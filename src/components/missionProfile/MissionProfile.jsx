import React from 'react';
import PropTypes from 'prop-types';
import './missionProfile.css';

function MissionProfile({ missionName, missionMore }) {
  return (
    <tr className="app_mission_profile-row">
      <td className="app_mission_profile-title">
        {missionName}
        <a href={missionMore} target="_blank" rel="noreferrer">Read more</a>
      </td>
    </tr>
  );
}

MissionProfile.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionMore: PropTypes.string.isRequired,
};

export default MissionProfile;
