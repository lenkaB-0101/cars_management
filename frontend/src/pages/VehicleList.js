// src/pages/VehicleList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('/api/vehicles/')
      .then(response => setVehicles(response.data))
      .catch(error => console.error('Error fetching vehicles:', error));
  }, []);

  return (
    <div>
      <h1>Vehicle List</h1>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            <Link to={`/vehicles/${vehicle.id}`}>
              {vehicle.brand} {vehicle.model} ({vehicle.year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
