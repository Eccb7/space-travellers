import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MissionFeature } from '../../components';
import './missions.css';
import { fetchMissions } from '../../redux/missions/missionSlice';

function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const { loading, missions, error } = useSelector((state) => state.mission);

  if (loading) return (<p>Please wait...</p>);
  if (error) return (<p>{error}</p>);
  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
      </tr>
      {
        missions.map((mission) => (
          <MissionFeature
            key={mission.mission_id}
            missionName={mission.mission_name}
            missionDesc={mission.description}
          />
        ))
      }
    </table>
  );
}

export default Missions;
