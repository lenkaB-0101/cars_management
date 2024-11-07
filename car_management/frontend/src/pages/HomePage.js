// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Welcome to Car Management</h1>
    <Link to="/vehicles">View Vehicles</Link>
  </div>
);

export default HomePage;
