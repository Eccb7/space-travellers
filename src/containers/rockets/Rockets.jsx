import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, reserve, cancel } from '../../redux/rockets/rocketsSlice';
import './rockets.css';

function Rockets() {
  const rockets = useSelector((state) => state.rockets.Data);
  const loading = useSelector((state) => state.rockets.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleReservation = (rocketId, reserved) => {
    if (reserved) {
      dispatch(cancel(rocketId));
    } else {
      dispatch(reserve(rocketId));
    }
  };

  return (
    <div className="rockets-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="rocket-list">
          {rockets.map((rocket) => (
            <li key={rocket.id} className="rocket-item">
              <img src={rocket.image} alt={`${rocket.name} Rocket`} />

              <div className="rocket-info">
                <h3>{rocket.name}</h3>
                <p>{rocket.description}</p>
                {rocket.reserved ? (
                  <div className="reservation-info">
                    <span>
                      <button type="button" disabled>
                        Reserved
                      </button>
                    </span>
                    <button
                      type="submit"
                      onClick={() => handleReservation(rocket.id, rocket.reserved)}
                    >
                      Cancel Reservation
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleReservation(rocket.id, rocket.reserved)}
                  >
                    Reserve Rocket
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Rockets;
