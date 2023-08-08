import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
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
      <h2>Rockets</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="rocket-list">
          {rockets.map((rocket) => (
            <li key={rocket.id} className="rocket-item">
              <img src={rocket.image} alt={`${rocket.name} Rocket`} />
              <div className="rocket-info">
                <h3>{rocket.name}</h3>
                <p>
                  {rocket.reserved ? <span className="reserved-span">Reserved</span> : ''}
                  {' '}
                  {rocket.description}

                </p>
                <div className="align-button">
                  {!rocket.reserved && (
                    <Button
                      variant="outline-danger"
                      type="button"
                      size="sm"
                      onClick={() => {
                        handleReservation(rocket.id, rocket.reserved);
                      }}
                    >
                      Reserve Rocket
                    </Button>
                  )}
                  {rocket.reserved && (
                    <Button
                      variant="outline-secondary"
                      type="submit"
                      size="sm"
                      onClick={() => {
                        handleReservation(rocket.id, rocket.reserved);
                      }}
                    >
                      Cancel Reservation
                    </Button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Rockets;
