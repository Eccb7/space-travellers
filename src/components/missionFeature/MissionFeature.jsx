import React from 'react';
import PropTypes from 'prop-types';
import './missionFeature.css';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missionSlice';

function MissionFeature({
  missionId, missionName, missionDesc, missionReserved,
}) {
  const dispatch = useDispatch();

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };
  return (
    <tr>
      <td className="app_mission-title">{missionName}</td>
      <td>{missionDesc}</td>
      {!missionReserved
        ? (<td><span>NOT A MEMBER</span></td>)
        : (<td><span>Dummy</span></td>)}
      {!missionReserved
        ? (<td><button type="button" title="Join Mission" onClick={() => handleJoinMission(missionId)}>Join Mission</button></td>)
        : (<td><span>Dummy</span></td>)}
    </tr>
  );
}

MissionFeature.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
  missionReserved: PropTypes.bool.isRequired,
};

export default MissionFeature;
