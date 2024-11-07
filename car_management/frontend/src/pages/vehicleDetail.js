// src/pages/VehicleDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    axios.get(`/api/vehicles/${id}/`)
      .then(response => setVehicle(response.data))
      .catch(error => console.error('Error fetching vehicle:', error));
  }, [id]);

  if (!vehicle) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{vehicle.brand} {vehicle.model} ({vehicle.year})</h1>
      <p>VIN: {vehicle.vin}</p>
      <p>Mileage: {vehicle.mileage} km</p>
      <p>Price: ${vehicle.price}</p>
      <p>Status: {vehicle.status}</p>
    </div>
  );
};

export default VehicleDetail;
