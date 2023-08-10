import React from 'react';
import PropTypes from 'prop-types';
import './missionFeature.css';
import { useDispatch } from 'react-redux';
import { LeaveMission, joinMission } from '../../redux/missions/missionSlice';

function MissionFeature({
  missionId, missionName, missionDesc, missionReserved,
}) {
  const dispatch = useDispatch();

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };
  const handleLeaveMission = (id) => {
    dispatch(LeaveMission(id));
  };

  return (
    <tr>
      <td className="app_mission-title">{missionName}</td>
      <td>{missionDesc}</td>
      {!missionReserved
        ? (<td><span className="app_mission-status app_mission-status_nomember">NOT A MEMBER</span></td>)
        : (<td><span className="app_mission-status app_mission-status_member">Active Member</span></td>)}
      {!missionReserved
        ? (<td><button type="button" title="Join Mission" onClick={() => handleJoinMission(missionId)} className="app_mission-button app_mission-button_join">Join Mission</button></td>)
        : (<td><button type="button" title="Leave Mission" onClick={() => handleLeaveMission(missionId)} className="app_mission-button app_mission-button_leave">Leave Mission</button></td>)}
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
