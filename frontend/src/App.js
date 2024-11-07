import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VehicleList from './pages/VehicleList';
import vehicleDetail from './pages/vehicleDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/vehicles" element={<VehicleList />} />
          <Route path="/vehicles/:id" element={<vehicleDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


