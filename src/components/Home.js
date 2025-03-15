import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import RobotList from './RobotList';
import RobotDetail from './RobotDetail';
import Top from './Top';
import Bottom from './Bottom';

function Home() {
  const location = useLocation();
  const role = location.state?.role || 'Usuario';

  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await fetch('http://localhost:3001/robots');
        if (!response.ok) {
          throw new Error('Error fetching robots');
        }
        const data = await response.json();
        setRobots(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRobots();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Top />
      <div className="container-fluid flex-grow-1">
        <div className="row mt-3">
          <div className="col-8">
            {loading ? (
              <p><FormattedMessage id="loading" /></p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <RobotList robots={robots} onSelect={setSelectedRobot} />
            )}
          </div>
          <div className="col-4">
            {selectedRobot ? (
              <RobotDetail robot={selectedRobot} role={role} />
            ) : (
              <p><FormattedMessage id="selectRobot" /></p>
            )}
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default Home;
