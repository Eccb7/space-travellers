import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MissionFeature } from '../../components';
import './missions.css';
import { fetchMissions } from '../../redux/missions/missionSlice';

function Missions() {
  const { loading, missions, error } = useSelector((state) => state.mission);

  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);

  if (loading) return (<p>Please wait...</p>);
  if (error) return (<p>{error}</p>);
  return (
    <table className="app_mission-table">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>{' '}</th>
        </tr>
      </thead>
      <tbody>
        {
          missions.map((mission) => (
            <MissionFeature
              key={mission.mission_id}
              missionId={mission.mission_id}
              missionName={mission.mission_name}
              missionDesc={mission.description}
              missionReserved={mission.reserved}
            />
          ))
        }
      </tbody>
    </table>
  );
}

export default Missions;
